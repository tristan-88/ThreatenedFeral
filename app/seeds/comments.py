from app.models import db, Comment
from faker import Faker
import random

faker = Faker ()

def seed_comments():
    
    for i in range(100):
        connection = Comment(
            content=faker.sentence(),
            user_id = faker.pyint(min_value=1, max_value=11),
            animal_id = faker.pyint(min_value=1, max_value=6)
            
        )
        db.session.add(connection)
    db.session.commit()
    
def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()