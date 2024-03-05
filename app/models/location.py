from .db import db, environment, add_prefix_for_prod, SCHEMA
from sqlalchemy.orm import relationship

class Location(db.Model):
    __tablename__ = "locations"
    if environment == "production":
        __table_args__ = {f"schema: {SCHEMA}"}
    
    id = db.Column(db.Integer, primary_key=True)
    lng = db.Column(db.Float, nullable=False)
    lat = db.Column(db.Float, nullable=False)
    location_name = db.Column(db.String, nullable=False)
    
    #associations
    location_animal = relationship("Animal_Location", backref="animal_location", cascade="all, delete")
    
    def to_dict(self):
        return {
            'id': self.id,
            "lat": self.lat,
            "lng": self.lng,
            "location_name": self.location_name,
        }