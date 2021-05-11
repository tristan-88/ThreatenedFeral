from app.models import db, Educator
from faker import Faker
import random

def seed_educators():
    
    educator_1 = Educator(
        educator_name='National Geographic',
        content_link="https://www.youtube.com/channel/UCpVm7bg6pXKo1Pr6k5kxG9A"
    )
    db.session.add(educator_1)
    db.session.commit()
    
    educator_2 = Educator(
        educator_name='Smithsonian Channel',
        content_link="https://www.youtube.com/c/smithsonianchannel/featured"
    )
    db.session.add(educator_2)
    db.session.commit()
    
    educator_3 = Educator(
        educator_name='Nat Geo Wild',
        content_link="https://www.youtube.com/user/NatGeoWild/featured"
    )
    db.session.add(educator_3)
    db.session.commit()
    
    educator_4 = Educator(
        educator_name='Dean Schneider',
        content_link="https://www.youtube.com/c/DeanSchneiderHakunaMipaka/featured"
    )
    db.session.add(educator_4)
    db.session.commit()
    
    
    educator_5 = Educator(
        educator_name="Mutual of Omaha's Wild Kingdom",
        content_link="https://www.youtube.com/c/wildkingdom/featured"
    )
    db.session.add(educator_5)
    db.session.commit()
    
    educator_6 = Educator(
        educator_name="WWF International",
        content_link="https://www.youtube.com/user/WWF/featured"
    )
    db.session.add(educator_6)
    db.session.commit()
    
    educator_7 = Educator(
        educator_name="Forever Wild Sanctuary",
        content_link="https://foreverwildsanctuary.org/"
    )
    db.session.add(educator_7)
    db.session.commit()
    
    
    
    
    
def undo_educators():
    db.session.execute('TRUNCATE educators RESTART IDENTITY CASCADE;')
    db.session.commit()