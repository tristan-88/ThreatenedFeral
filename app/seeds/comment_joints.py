from app.models import db, Comment_Joint
from faker import Faker
import random

faker = Faker ()

def seed_comment_joints():
    
    for i in range(100):
        connection = Comment_Joint(
            comment_id= faker.pyint(min_value=1, max_value=50),
            user_id = faker.pyint(min_value=1, max_value=11),
            animal_id = faker.pyint(min_value=1, max_value=6)
        )
        db.session.add(connection)
    db.session.commit()
    
def undo_comment_joints():
    db.session.execute('TRUNCATE comment_joints RESTART IDENTITY CASCADE;')
    db.session.commit()