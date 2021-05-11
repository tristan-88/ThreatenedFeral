from app.models import db, Favorite_Animal_List
from faker import Faker
import random

faker = Faker()

def seed_favorite_animal_lists():
    for i in range(25):
        connection = Favorite_Animal_List(
            animal_id = faker.pyint(min_value=1, max_value=6),
            user_id = faker.pyint(min_value=1, max_value=11)
        )
        db.session.add(connection)
    db.session.commit()


def undo_favorite_animal_lists():
      db.session.execute("TRUNCATE favorite_animal_lists RESTART IDENTITY CASCADE;")
      db.session.commit()

    