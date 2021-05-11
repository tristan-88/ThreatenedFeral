from app.models import db, Animal_Educator
from faker import Faker
import random

faker = Faker()

def seed_animal_educators():
    for i in range(25):
        connection = Animal_Educator(
            animal_id = faker.pyint(min_value=1, max_value=6),
            educator_id = faker.pyint(min_value=1, max_value=7)
        )
        db.session.add(connection)
    db.session.commit()
    
    
def undo_animal_educators():
    db.session.execute("TRUNCATE animal_educators RESTART IDENTITY CASCADE;")
    db.session.commit()