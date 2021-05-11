from app.models import db, Photo


def seed_photos():
    photo_1 = Photo(
        photo_url='https://cdn.britannica.com/40/75640-050-F894DD85/tiger-Siberian.jpg',
        photo_description="The average lifespan of a tiger in the wild is about 11 years. In captivity their lifespan is about 20 to 25 years.",
        animal_id=1
        
    )
    db.session.add(photo_1)
    db.session.commit()
    
    photo_2= Photo(
        photo_url='https://cdn.britannica.com/76/92676-050-F91A67C7/Sumatran-tiger-water.jpg',
        photo_description="Most classifications separate the tiger species into six subspecies. These include the Siberian tiger, the Bengal tiger, the Sumatran tiger, the Indo-Chinese tiger, the South China tiger, and the Malayan tiger. Some classifications merge these subspecies, and others suggest that two distinct tiger species exist.",
        animal_id=1
        
    )
    db.session.add(photo_2)
    db.session.commit()
    
 
    photo_3= Photo(
        photo_url='https://cdn.britannica.com/39/75639-050-07D5CA0D/Bengal-tiger-cubs.jpg',
        photo_description="Tigers eat large prey animals like deer and wild pigs, though they make exceptions for some small animals, including porcupines. After consuming what they can of their prey, tigers hide animal carcasses from scavengers so they can return to them later.",
        animal_id=1
        
    )
    db.session.add(photo_3)
    db.session.commit()
    
    photo_4= Photo(
        photo_url='https://happymag.tv/wp-content/uploads/2020/12/bluewhale2.jpg',
        photo_description="Blue whale songs – referred to as vocalisations – have previously been categorised into just 13 types.",
        animal_id=5
        
    )
    db.session.add(photo_4)
    db.session.commit()
    
    photo_5= Photo(
        photo_url='https://cdn.britannica.com/51/134851-050-48706A0E/blue-whale-ocean.jpg',
        photo_description="Fears that many whales would be hunted to extinction led to a global ban on commercial whaling in 1986.",
        animal_id=5
        
    )
    db.session.add(photo_5)
    db.session.commit()
    
    photo_6= Photo(
        photo_url='https://happymag.tv/wp-content/uploads/2020/12/bluewhale-870x524.jpg',
        photo_description="The blue whale is the largest creature to ever have roamed the earth, but despite its apparent majesty, this beast was hunted to near extinction in the 20th century.",
        animal_id=5
        
    )
    db.session.add(photo_6)
    db.session.commit()
    
    photo_7= Photo(
        photo_url='https://images.theconversation.com/files/43861/original/6gqj734n-1394723838.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
        photo_description="A white shark near isolated, volcanic Isla Guadalupe in Mexico. “The summer of 1916 was the dawn of modern, urban shark panic.",
        animal_id=6
        
    )
    db.session.add(photo_7)
    
    photo_8= Photo(
        photo_url='https://i.guim.co.uk/img/media/54ca26399fccabde9d52ae589be93ecad85c676e/282_361_5222_3134/master/5222.jpg?width=1020&quality=85&auto=format&fit=max&s=cded230a84d7b4aa94eed0e6f0a2d6de',
        photo_description="Ocean Ramsey, a shark researcher, came face-to-face with what could be one of the largest great whites ever recorded.",
        animal_id=6
        
    )
    db.session.add(photo_8)
    
    db.session.commit()
    
    photo_9= Photo(
        photo_url='https://images.theconversation.com/files/207813/original/file-20180226-140181-un3yf6.jpg?ixlib=rb-1.1.0&rect=0%2C763%2C6290%2C3140&q=45&auto=format&w=668&h=324&fit=crop',
        photo_description="Encounters between humans and sharks are extremely variable over time, and difficult to predict. The increases in recorded incidents between 1997 and 2017 are relatively small, and may be explained by factors not related to shark populations – such as increases in the reporting of shark encounters, or increasing beach use.",
        animal_id=6
        
    )
    db.session.add(photo_9)
    
    db.session.commit()
    
    photo_10= Photo(
        photo_url='https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.fit-2000w.jpg',
        photo_description="One-year-old female giant panda cub Nuan Nuan at the National Zoo in Kuala Lumpur on Aug. 23.",
        animal_id=2
        
    )
    db.session.add(photo_10)
    
    db.session.commit()
    
    photo_11= Photo(
        photo_url='https://images.csmonitor.com/csm/2015/10/944693_1_1029%20panda%20diplomacy_standard.jpg?alias=standard_900x600nc',
        photo_description="Baby pandas pose for photos as a giant panda breeding center in Ya'an, Sichuan province.",
        animal_id=2
        
    )
    db.session.add(photo_11)
    
    db.session.commit()
    
    photo_12= Photo(
        photo_url='https://images.theconversation.com/files/145246/original/image-20161109-19051-4qpii6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
        photo_description="Forty years after giant panda numbers reached an all-time low, specialists around the world are still trying to develop a self-sustaining population in captivity that can be released into the wild to secure the animal’s future.",
        animal_id=2
        
    )
    db.session.add(photo_12)
    
    db.session.commit()
    photo_13= Photo(
        photo_url='https://www.onegreenplanet.org/wp-content/uploads/2020/03/shutterstock_630373091-2048x1366.jpg',
        photo_description="A study found that polar bear dens often go undetected during oil industry checks. According to Reuters, a study found that the oil industry’s method for finding polar bear dens while drilling in Alaska fails half the time.",
        animal_id=3
        
    )
    db.session.add(photo_13)
    
    db.session.commit()
    
    photo_14= Photo(
        photo_url='https://d2i45monewphm9.cloudfront.net/wp-content/uploads/2020/09/Polar-Bear-Photo.jpg',
        photo_description="Polar bears are getting thinner and having fewer cubs. Melting sea ice is to blame",
        animal_id=3
        
    )
    db.session.add(photo_14)
    
    db.session.commit()
    
    photo_15= Photo(
        photo_url='https://cdn.cnn.com/cnnnext/dam/assets/200720030735-01-polar-bear-svalbard-0709-exlarge-169.jpg',
        photo_description="For many people, there is one animal that comes to mind when they think of creatures threatened by climate change: the polar bear.",
        animal_id=3
        
    )
    db.session.add(photo_15)
    db.session.commit()
    
    photo_16= Photo(
        photo_url='https://www.treehugger.com/thmb/sscPr_yVV0tNomAcumjitE49yso=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__02__black-rhino-ba3eb16445494eb0a9f0d995c5d7cffa.jpg',
        photo_description="The new genetic data we have collected will allow us to identify populations of priority for conservation, giving us a better chance of preventing the species from total extinction.",
        animal_id=4
        
    )
    db.session.add(photo_16)
    db.session.commit()
    
    photo_17= Photo(
        photo_url='https://www.treehugger.com/thmb/zHGpIXUj5KiO1cMtn8eXDHD62Qo=/1024x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__02__black-rhino-female-and-calf-dae571b1b06a4e0485fc4444f1132a9e.jpg',
        photo_description="A black rhinoceros mother and calf visit a watering hole in the Etosha National Park in Namibia.",
        animal_id=4
        
    )
    db.session.add(photo_17)
    db.session.commit()
    
    photo_18= Photo(
        photo_url='https://thehill.com/sites/default/files/styles/thumb_small_article/public/blackrhino_09242018getty.jpg?itok=0HSzFHKC',
        photo_description="The black rhinoceros is considered a critically endangered species, but Namibia allows up to five of the animals to be killed in hunts each year.",
        animal_id=4
        
    )
    db.session.add(photo_18)
    db.session.commit()

def undo_photos():
    db.session.execute("TRUNCATE photos RESTART IDENTITY CASCADE;")
    db.session.commit()