from app.models import Animal_Location, db

def seed_animal_locations():
    location_1 = Animal_Location(
        animal_id = 1,
        location_id = 1,
    )
    db.session.add(location_1)
    db.session.commit()
    
    location_2 = Animal_Location(
        animal_id = 1,
        location_id = 2,
    )
    db.session.add(location_2)
    db.session.commit()
    
    location_3 = Animal_Location(
        animal_id = 1,
        location_id = 3,
    )
    db.session.add(location_3)
    db.session.commit()
    
    location_4 = Animal_Location(
        animal_id = 1,
        location_id = 4,
    )
    db.session.add(location_4)
    db.session.commit()
    
    location_5 = Animal_Location(
        animal_id = 2,
        location_id = 3,
    )
    db.session.add(location_5)
    db.session.commit()
    
    location_6 = Animal_Location(
        animal_id = 2,
        location_id = 2,
    )
    db.session.add(location_6)
    db.session.commit()
    
    location_7 = Animal_Location(
        animal_id = 2,
        location_id = 1,
    )
    db.session.add(location_7)
    db.session.commit()
    
    location_8 = Animal_Location(
        animal_id = 3,
        location_id = 4,
    )
    db.session.add(location_8)
    db.session.commit()
    
    location_9 = Animal_Location(
        animal_id = 4,
        location_id = 4,
    )
    db.session.add(location_9)
    db.session.commit()
    
    location_10 = Animal_Location(
        animal_id = 5,
        location_id = 5,
    )
    db.session.add(location_10)
    db.session.commit()
    
    location_11 = Animal_Location(
        animal_id = 6,
        location_id = 5,
    )
    db.session.add(location_11)
    db.session.commit()
    
    location_12 = Animal_Location(
        animal_id= 7,
        location_id= 6,
    )
    db.session.add(location_12)
    db.session.commit()
    
def undo_animal_locations():
     db.session.execute("TRUNCATE animal_locations RESTART IDENTITY CASCADE;")
     db.session.commit()
