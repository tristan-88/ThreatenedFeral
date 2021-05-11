from .db import db
from sqlalchemy.orm import relationship

class Animal_Educator(db.Model):
    __tablename__ = "animal_educators"
    
    id= db.Column(db.Integer, primary_key=True)
    animal_id = db.Column(db.Integer, db.ForeignKey("animals.id"))
    educator_id = db.Column(db.Integer, db.ForeignKey("educators.id"))
    
    
    
    def to_dict(self):
        return{
            "id": self.id,
            "animal_id": self.animal_id,
            "educator_id": self.educator_id
        }