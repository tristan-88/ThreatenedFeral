import os
from flask import Flask, render_template, request, session, redirect
from flask.helpers import url_for
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager

from .models import db, environment, SCHEMA, add_prefix_for_prod, Animal_Location, Animal, Animal_Educator, Comment, Educator, Favorite_Animal_List, Favorite_Educator_List, Location, Non_Profit_Org, Photo, User

#routes
from .api.user_routes import user_routes
from .api.auth_routes import auth_routes
from .api.animal_routes import animal_routes
from .api.map_routes import map_routes
from .api.comment_routes import comment_routes
from .api.favorite_routes import favorite_routes
from .api.image_routes import image_routes

from .seeds import seed_commands

from .config import Config

app = Flask(__name__, static_folder='../react-app/build', static_url_path='/')

# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# Tell flask about our seed commands
app.cli.add_command(seed_commands)

app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(animal_routes, url_prefix='/api/animals')
app.register_blueprint(map_routes, url_prefix='/api/maps')
app.register_blueprint(comment_routes, url_prefix='/api/comments')
app.register_blueprint(favorite_routes, url_prefix="/api/favorites")
app.register_blueprint(image_routes, url_prefix='/api/images')
db.init_app(app)
Migrate(app, db)

# Application Security
CORS(app, resources={r"/api/*": {"origins": ["http://localhost:3000"]}})

# Since we are deploying with Docker and Flask,
# we won't be using a buildpack when we deploy to Heroku.
# Therefore, we need to make sure that in production any
# request made over http is redirected to https.
# Well.........


@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get(
                            'FLASK_ENV') == 'production' else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') == 'production' else None,
                        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
