from .db import db
from sqlalchemy.orm import relationship

class Comment(db.Model):
     __tablename__ = "comments"
     id = db.Column(db.Integer, primary_key = True)
     user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
     animal_id = db.Column(db.Integer, db.ForeignKey("animals.id"))
     content = db.Column(db.Text)
     
     #association
     
     def to_dict(self):
         return{
            "id": self.id,
            "content": self.content,
            "animal_id": self.animal_id,
            "user": self.comment_user.to_dict()
         }
