from .db import db, environment, add_prefix_for_prod, SCHEMA
from sqlalchemy.orm import relationship

class Favorite_Educator_List(db.Model):
    __tablename__ = "favorite_educator_list"
    
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    educator_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("educators.id")))
    
    #associations
    if environment == "production":
        __table_args__ = {f"schema: {SCHEMA}"}
    
    def to_dict(self):
        return{
            "id": self.id,
            "user": self.user,
            "educator_id": self.educator_id
        }
    
    
    