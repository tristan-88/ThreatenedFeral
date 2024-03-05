from .db import db, environment, add_prefix_for_prod, SCHEMA
from sqlalchemy.orm import relationship

class Photo(db.Model):
    __tablename__ = "photos"
    if environment == "production":
        __table_args__ = {f"schema: {SCHEMA}"}
    
    id = db.Column(db.Integer, primary_key=True)
    photo_url = db.Column(db.String)
    photo_description = db.Column(db.Text)
    animal_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("animals.id")))
    
    
    #asssociation
    # photo_animal = relationship("Animal", backref="animal_photo", cascade="all, delete")
    
    def to_dict(self):
        return{
            "id": self.id,
            "photo_url": self.photo_url,
            "photo_description": self.photo_description,
            "animal_id": self.animal_id   
        }
        