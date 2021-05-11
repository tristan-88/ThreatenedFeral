from .db import db
from sqlalchemy.orm import relationship

class Comment_Joint(db.Model):
     __tablename__ = "comment_joints"
     id = db.Column(db.Integer, primary_key = True)
     comment_id = db.Column(db.Integer, db.ForeignKey("comments.id"))
     user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
     animal_id = db.Column(db.Integer, db.ForeignKey("animals.id"))
     
     #association
     
     def to_dict(self):
         return{
            "id": self.id,
            "comment_id": self.comment_id,
            "user_id": self.user_id,
            "animal_id": self.animal_id
         }
         