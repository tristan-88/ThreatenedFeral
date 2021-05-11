from .db import db
from sqlalchemy.orm import relationship

class Comment(db.Model):
    __tablename__ = "comments"
    
    id= db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    
    
    #associations
    comment_user = relationship("Comment_Joint", backref="user_comment", cascade="all, delete")
    comment_animal = relationship("Comment_Joint", backref="animal_comment", cascade="all, delete")
    
    def to_dict(self):
        return {
            "id": self.id,
            "content": self.content
        }