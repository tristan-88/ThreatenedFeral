from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.orm import relationship

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  address = db.Column(db.String, nullable=False)
  city= db.Column(db.String, nullable=False)
  state = db.Column(db.String, nullable=False)
  zipcode = db.Column(db.Integer, nullable=False)
  avatar_url = db.Column(db.String)
  
  #association
  user_favorite_animal = relationship("Favorite_Animal_List", backref="animal_favorite_user", cascade="all, delete")
  user_favorite_educator = relationship('Favorite_Educator_List', backref="educator_favorite_user", cascade="all, delete")
  user_comment = relationship("Comment_Joint", backref="comment_user", cascade="all, delete")


  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "address": self.address,
      "city": self.city,
      "state": self.state,
      "zipcode": self.zipcode,
      "avatar_url": self.avatar_url
    }
