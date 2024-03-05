from .db import db, environment, add_prefix_for_prod, SCHEMA
from sqlalchemy.orm import relationship

class Animal_Location(db.Model):
    __tablename__ = "animal_locations"
    if environment == "production":
        __table_args__ = {f"schema: {SCHEMA}"}
    
    id= db.Column(db.Integer, primary_key=True)
    animal_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("animals.id")))
    location_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("locations.id")))
    
    
    
    def to_dict(self):
        return{
            "id": self.id,
            "animal_id": self.animal_id,
            "location_id": self.location_id
        }