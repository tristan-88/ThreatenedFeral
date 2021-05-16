from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Animal

animal_routes = Blueprint('animals', __name__)

#get all animals
@animal_routes.route('/')
@login_required
def animals():
    animals = Animal.query.all()
    #list output version
    return {"animals": {animal.id: animal.to_dict() for animal in animals} }
   # dictionary version
    # return { animal.id: animal.to_dict() for animal in animals}


#get single animal by id
@animal_routes.route('/<int:id>')
@login_required
def animal(id):
    animal = Animal.query.get(id)
    return animal.to_dict()