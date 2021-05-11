from .db import db
from sqlalchemy.orm import relationship

class Educator(db.Model):
    __tablename__ = "educators"
    
    id = db.Column(db.Integer, primary_key=True)
    educator_name = db.Column(db.String(100), nullable=False)
    content_link = db.Column(db.String, nullable=False)
    
    #associations
    fav_educator = relationship("Favorite_Educator_List", backref="educator_fav", cascade="all, delete")
    educator_animal = relationship("Animal_Educator", backref="animal_educator", cascade="all, delete")
    
    def to_dict(self):
        return{
            "id": self.id,
            "educator_name": self.educator_name,
            "content_link": self.content_link
        }
    