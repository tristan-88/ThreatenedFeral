from app.api.user_routes import user
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Favorite_Animal_List, User, Animal

favorite_routes = Blueprint('favorites', __name__)

@favorite_routes.route('/', methods=['POST'])
@login_required
def favorite():
    fav_animal_id = request.json["animalId"]
    favorite = Favorite_Animal_List(
        animal_id = fav_animal_id, 
        user_id = current_user.id
        )
    db.session.add(favorite)
    db.session.commit()
    return favorite.to_dict()

@favorite_routes.route('/', methods=['DELETE'])
@login_required
def unfavorite():
    fav_animal_id = request.json["animalId"]
    favorite = Favorite_Animal_List.query.filter(Favorite_Animal_List.animal_id == fav_animal_id, Favorite_Animal_List.user_id == current_user.id).first()
    db.session.delete(favorite)
    db.session.commit()
    return {'message': "success"}