from .db import db, environment, add_prefix_for_prod, SCHEMA
from sqlalchemy.orm import relationship

class Favorite_Animal_List(db.Model):
    __tablename__ = "favorite_animal_lists"
    if environment == "production":
        __table_args__ = {'schema': f"{SCHEMA}"}
    
    
    id = db.Column(db.Integer, primary_key=True)
    animal_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("animals.id")))
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    
   
    
    def to_dict(self):
        return{
            "id": self.id,
            "animal_id": self.animal_id,
            "user_id": self.user_id
        }
    