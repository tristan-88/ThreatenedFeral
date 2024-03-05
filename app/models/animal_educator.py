from .db import db, environment, add_prefix_for_prod, SCHEMA
from sqlalchemy.orm import relationship

class Animal_Educator(db.Model):
    __tablename__ = "animal_educators"
    if environment == "production":
        __table_args__ = {f"schema: {SCHEMA}"}
    
    id= db.Column(db.Integer, primary_key=True)
    animal_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("animals.id")))
    educator_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("educators.id")))
    
    
    
    def to_dict(self):
        return{
            "id": self.id,
            "animal_id": self.animal_id,
            "educator_id": self.educator_id
        }