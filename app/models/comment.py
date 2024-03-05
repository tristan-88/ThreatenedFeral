from .db import db, environment, add_prefix_for_prod, SCHEMA
from sqlalchemy.orm import relationship

class Comment(db.Model):
     __tablename__ = "comments"
     
        
     id = db.Column(db.Integer, primary_key = True)
     user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
     animal_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("animals.id")))
     content = db.Column(db.Text)
     
     #association
     if environment == "production":
        __table_args__ = {f"schema: {SCHEMA}"}
     
     def to_dict(self):
         return{
            "id": self.id,
            "content": self.content,
            "animal_id": self.animal_id,
            "user": self.comment_user.to_dict()
         }
