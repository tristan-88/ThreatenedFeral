from .db import db, environment, add_prefix_for_prod, SCHEMA
from sqlalchemy.orm import relationship

class Non_Profit_Org(db.Model):
    __tablename__ = "non_profit_orgs"
    if environment == "production":
        __table_args__ = {f"schema: {SCHEMA}"}
    
    id = db.Column(db.Integer, primary_key=True)
    non_profit_name = db.Column(db.String)
    non_profit_link = db.Column(db.String)
    animal_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("animals.id")))
    

#associations
    non_profit_org_animal = relationship("Animal", backref="animal_non_profit_org", cascade="all, delete")

    def to_dict(self):
        return {
            "id": self.id,
            "non_profit_name":self.non_profit_name,
            "non_profit_link": self.non_profit_link,
            "animal_id": self.animal_id
        }