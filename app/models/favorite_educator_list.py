from .db import db
from sqlalchemy.orm import relationship

class Favorite_Educator_List(db.Model):
    __tablename__ = "favorite_educator_lists"
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    educator_id = db.Column(db.Integer, db.ForeignKey("educators.id"))
    
    #associations
    
    def to_dict(self):
        return{
            "id": self.id,
            "user": self.user,
            "educator_id": self.educator_id
        }
    
    
    