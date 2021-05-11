# from werkzeug.security import generate_password_hash
from app.models import db, User
from faker import Faker
import random

faker  = Faker()

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(
        username='Demo', 
        email='demo@aa.io',
        password='password',
        address="17090 NW185th Ln",
        city="Surprise",
        state="California",
        zipcode=85374,
        avatar_url="https://cdn.britannica.com/40/75640-050-F894DD85/tiger-Siberian.jpg"
        
        )

    db.session.add(demo)
    db.session.commit()

    for i in range(10):
        other = User(
            username=f'{faker.first_name()}{faker.random_int(0, 99)}',
            email=faker.safe_email(),
            password='password',
            address=faker.street_address(),
            city=faker.city(),
            state=faker.state(),
            zipcode=faker.postcode(),
            avatar_url="https://cdn.britannica.com/40/75640-050-F894DD85/tiger-Siberian.jpg"
        )
        db.session.add(other)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
