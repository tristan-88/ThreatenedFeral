from .db import db, environment, add_prefix_for_prod, SCHEMA
from sqlalchemy.orm import relationship

class Animal(db.Model):
    __tablename__ = "animals"
    if environment == "production":
        __table_args__ = {'schema': f"{SCHEMA}"}
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.Text)
    fact_1 = db.Column(db.Text)
    fact_2 = db.Column(db.Text)
    fact_3 = db.Column(db.Text)
    fact_4 = db.Column(db.Text)
    fact_5 = db.Column(db.Text)
    fact_6 = db.Column(db.Text)
    threats = db.Column(db.Text)
    call_cry = db.Column(db.String)
    
    #association
    animal_loc = relationship("Animal_Location", backref="loc_animal", cascade="all, delete")
    animal_fav = relationship("Favorite_Animal_List", backref="fav_animal", cascade="all, delete")
    animal_comment = relationship('Comment', backref="comment_animal", cascade="all, delete")
    animal_educator = relationship("Animal_Educator", backref="educator_animal", cascade="all, delete")
    animal_photo = relationship("Photo", backref="photo_animal", cascade="all, delete")
    
    def to_dict(self):
        return{
            "id" :self.id,
            "name":self.name,
            "description":self.description,
            "fact_1": self.fact_1,
            "fact_2": self.fact_2,
            "fact_3": self.fact_3,
            "fact_4": self.fact_4,
            "fact_5": self.fact_5,
            "fact_6": self.fact_6,
            "threats": self.threats,
            "call_cry": self.call_cry,
            "photos": [photo.to_dict() for photo in self.animal_photo],
            "locations": [location.animal_location.to_dict() for location in self.animal_loc],
            "comment": {comment.id: comment.to_dict() for comment in self.animal_comment},
            "educator": [educator.animal_educator.to_dict() for educator in self.animal_educator],
            "org":[org.to_dict() for org in self.animal_non_profit_org] #direct many to many association attribute creation
        }
       
        