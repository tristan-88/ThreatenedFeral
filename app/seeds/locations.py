from app.models import Location, db

def seed_locations():
    location_1 = Location(
        lat= 38.929616,
        lng= -77.049784,
        location_name= "National Zoo"
    )
    db.session.add(location_1)
    db.session.commit()
    
    location_2 = Location(
        lat= 35.150063,
        lng= -89.994332,
        location_name= "Memphis Zoo"
    )
    db.session.add(location_2)
    db.session.commit()
    
    location_3 = Location(
        lat= 33.733759,
        lng= -84.37166,
        location_name= "Zoo Atlanta"
    )
    db.session.add(location_3)
    db.session.commit()
    
    location_4 = Location(
        lat= 38.636625,
        lng= -90.292819,
        location_name= "Saint Louis Zoo"
    )
    db.session.add(location_4)
    db.session.commit()
    
    location_5 = Location(
        lat= 35.845837,
        lng= -40.481787,
        location_name= "Atlantic Ocean"
    )
    db.session.add(location_5)
    db.session.commit()
    
    location_6 = Location(
        lat= -4.9276,
        lng= 105.7769,
        location_name= "Way Kambas National Park"
    )
    db.session.add(location_6)
    db.session.commit()
    
    


def undo_locations():
     db.session.execute("TRUNCATE locations RESTART IDENTITY CASCADE;")
     db.session.commit()
