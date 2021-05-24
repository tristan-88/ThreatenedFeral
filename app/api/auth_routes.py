from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from app.aws import (
   upload_file_to_s3, allowed_file, get_unique_filename 
)

auth_routes = Blueprint('auth', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    print(request.get_json())
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()
    
    avatar_image = None
    avatar_upload = None
    avatar_url = None
    
    if (request.files):
        try:
            if(request.files["avatar_url"]):
                #avatar_url from formdata which is an actual file from front end
                avatar_image = request.files["avatar_url"]
                
                if not allowed_file(avatar_image.filename):
                    return {"errors": "file type not permitted"}, 400

                avatar_image.filename = get_unique_filename(avatar_image.filename)
                avatar_upload = upload_file_to_s3(avatar_image)
                
                if "url" not in avatar_upload:
                    return avatar_upload, 400
                
                
                avatar_url = avatar_upload["url"]
                form["avatar_url"].data = avatar_url
        
        except:
            pass
                
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User(
            username=request.form['username'],
            email= request.form['email'],
            password=request.form['password'],
            address = request.form["address"],
            city = request.form['city'],
            state = request.form['state'],
            zipcode = request.form['zipcode'],
            avatar_url = avatar_url,
            
            
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
