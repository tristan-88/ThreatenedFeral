from app.models import db, Comment
from faker import Faker
import random

faker = Faker()

def seed_comments():
    
    for i in range(50):
        comments = Comment(
            content = faker.sentence()
        )
        db.session.add(comments)
    db.session.commit()
    
def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
