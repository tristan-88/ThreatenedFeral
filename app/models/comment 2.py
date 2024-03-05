from .db import db, environment, add_prefix_for_prod, SCHEMA
from sqlalchemy.orm import relationship

class Comment(db.Model):
    __tablename__ = "comments"
    if environment == "production":
        __table_args__ = {'schema': f"{SCHEMA}"}
    
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