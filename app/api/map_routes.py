from os import environ
from flask import Blueprint, jsonify, session, request
from urllib.request import  urlopen
from urllib.parse import  quote_plus
from json import dumps, loads

map_routes = Blueprint('maps', __name__)

api_key = environ.get('API_KEY')

@map_routes.route('/directions/', methods=['POST'])
def direction():
    data = request.json
    origin = quote_plus(data['origin'])
    destination = quote_plus(data['destination'])
    response = urlopen(f"https://maps.googleapis.com/maps/api/directions/json?origin={origin}&destination={destination}&key={api_key}")
    object = loads(response.read().decode('UTF-8')) # equivalent of await response.json()
    return object
