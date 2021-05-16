from .db import db
from sqlalchemy.orm import relationship

class Favorite_Animal_List(db.Model):
    __tablename__ = "favorite_animal_lists"
    
    id = db.Column(db.Integer, primary_key=True)
    animal_id = db.Column(db.Integer, db.ForeignKey("animals.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    
    def to_dict(self):
        return{
            "id": self.id,
            "animal_id": self.animal_id,
            "user_id": self.user_id
        }
    