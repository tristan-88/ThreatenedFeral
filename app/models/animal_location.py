from .db import db
from sqlalchemy.orm import relationship

class Animal_Location(db.Model):
    __tablename__ = "animal_locations"
    
    id= db.Column(db.Integer, primary_key=True)
    animal_id = db.Column(db.Integer, db.ForeignKey("animals.id"))
    location_id = db.Column(db.Integer, db.ForeignKey("locations.id"))
    
    
    
    def to_dict(self):
        return{
            "id": self.id,
            "animal_id": self.animal_id,
            "location_id": self.location_id
        }