from app.models import db, Non_Profit_Org
from faker import Faker
import random

faker = Faker()

def seed_non_profit_orgs():
    
    for i in range(6):
        connection_1= Non_Profit_Org(
            non_profit_name= "World Wild Life",
            non_profit_link="https://www.worldwildlife.org/",
            animal_id=(i+1)
        )
        db.session.add(connection_1)
    db.session.commit()
    
    for j in range(6):
        connection_2= Non_Profit_Org(
            non_profit_name= "Wild Animal Sanctuary",
            non_profit_link="https://www.wildanimalsanctuary.org/",
            animal_id=(j+1)
        )
        db.session.add(connection_2)
    db.session.commit()
    
    connection_3= Non_Profit_Org(
        non_profit_name= "Pacific Marine Mammal Center",
        non_profit_link="https://www.pacificmmc.org/",
        animal_id=5
    )
    db.session.add(connection_3)
    db.session.commit()
    
    connection_4= Non_Profit_Org(
        non_profit_name= "Marine Bio",
        non_profit_link="https://www.marinebio.org/",
        animal_id=faker.pyint(min_value=5, max_value=6)
    )
    db.session.add(connection_4)
    db.session.commit()
    
    connection_5 = Non_Profit_Org(
        non_profit_name="Sumatran Elephant Project",
        non_profit_link="https://www.sumatranelephantproject.org/",
        animal_id=7
    )
    db.session.add(connection_5)
    db.session.commit()
    
def undo_non_profit_orgs():
    db.session.execute("TRUNCATE non_profit_orgs RESTART IDENTITY CASCADE;")
    db.session.commit()
