from app.models import db, Favorite_Educator_List
from faker import Faker
import random

faker = Faker()

def seed_favorite_educator_list():
    for i in range(25):
        connection = Favorite_Educator_List(
            educator_id = faker.pyint(min_value=1, max_value=7),
            user_id = faker.pyint(min_value=1, max_value=11)
        )
        db.session.add(connection)
    db.session.commit()


def undo_favorite_educator_list():
      db.session.execute("TRUNCATE favorite_educator_list RESTART IDENTITY CASCADE;")
      db.session.commit()
