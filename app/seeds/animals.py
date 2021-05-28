from app.models import db, Animal



def seed_animals():
    
     animal_1 = Animal(
         name= 'Tiger',
         description= ''' 
            There are two recognized subspecies of tiger*: the continental (Panthera tigris tigris) and the Sunda (Panthera tigris sondaica). The largest of all the Asian big cats, tigers rely primarily on sight and sound rather than smell for hunting. They typically hunt alone and stalk prey. A tiger can consume more than 80 pounds of meat at one time. On average, tigers give birth to two to four cubs every two years. If all the cubs in one litter die, a second litter may be produced within five months.

            Tigers generally gain independence at around two years of age and attain sexual maturity at age three or four for females and four or five years for males. Juvenile mortality is high, however—about half of all cubs do not survive more than two years. Tigers have been known to reach up to 20 years of age in the wild.

            Males of the larger subspecies, the continental tiger, may weigh up to 660 pounds. For males of the smaller subspecies—the Sunda tiger—the upper range is at around 310 pounds. Within both subspecies, males are heavier than females.

            Tigers are mostly solitary, apart from associations between mother and offspring. Individual tigers have a large territory, and the size is determined mostly by the availability of prey. Individuals mark their domain with urine, feces, rakes, scrapes, and vocalizing.

            Across their range, tigers face unrelenting pressures from poaching, retaliatory killings, and habitat loss. They are forced to compete for space with dense and often growing human populations.

            *New Subspecies Classifications
            Since 2017, IUCN has recognized two tiger subspecies, commonly referred to as the continental tiger and the Sunda island tiger. All remaining island tigers are found only in Sumatra, with tigers in Java and Bali now extinct. These are popularly known as Sumatran tigers. The continental tigers currently include the Bengal, Malayan, Indochinese and Amur (Siberian) tiger populations, while the Caspian tiger is extinct in the wild. The South China tiger is believed to be functionally extinct.
            ''',
         fact_1="Status:Endangered",
         fact_2="Weight: 220-660 pounds",
         fact_3="Scienific name:Panthera tigris",
         fact_4="Length: 6-10 feet",
         fact_5="Habitats: Tropical rainforests, evergreen forests, temperate forests, mangrove swamps, grasslands, and savannas",
         fact_6="Population: Around 3,900",
         threats= '''Tigers have lost an estimated 95% of their historical range. Their habitat has been destroyed, degraded, and fragmented by human activities. The clearing of forests for agriculture and timber, as well as the building of road networks and other development activities, pose serious threats to tiger habitats. Tigers need wide swaths of habitat for their survival since they have large home ranges and are very territorial. Fewer tigers can survive in small, scattered islands of habitat, which leads to a higher risk of inbreeding and makes tigers more vulnerable to poaching as they venture beyond protected areas to establish their territories. This underscores the need to ensure habitat connectivity between the protected areas where tigers live. People and tigers increasingly compete for space. As forests shrink and prey becomes scarce, tigers are forced to leave protected areas in search of food and to establish territories. This takes them into human-dominated areas that lie between habitat fragments, where they can hunt domestic livestock that many local communities depend on for their livelihood. In retaliation, tigers are sometimes killed or captured. “Conflict” tigers can end up for sale in black markets. Local community dependence on forests for fuel wood, food, and timber heightens the risk of tiger attacks on people. One of the world’s largest, and most uniquely-adapted, tiger populations are found in the Sundarbans—a large mangrove forest area shared by India and Bangladesh on the coast of the Indian Ocean. It is also the only coastal mangrove tiger habitat in the world. These mangrove forests harbor a variety of species, including tigers, and protect coastal regions from storm surges and wind damage. However, rising sea levels caused by climate change threaten to wipe out these forests and the last remaining habitat of this tiger population. The current scale of commercial captive breeding efforts within these farms is a significant obstacle to the recovery and protection of wild tiger populations because they perpetuate the demand for tiger products, serve as a cover for illegal trade and undermine enforcement efforts. WWF is engaging with governments in countries with active tiger farms, and advocates ending breeding and phasing out the farms. WWF also advocates for improved regulation of the captive tiger population in the US. It is estimated that approximately 5,000 tigers reside in the US, and we must ensure that these animals are not exploited by, or contributing to, the illegal trade in tigers and their parts.''',
         call_cry="https://freeanimalsounds.org/wp-content/uploads/2017/07/Tiger.mp3"
     )
     
     db.session.add(animal_1)
     db.session.commit()
     
     
     animal_2 = Animal(
         name= 'Giant Panda',
         description= ''' 
            The panda, with its distinctive black and white coat, is adored by the world and considered a national treasure in China. This bear also has a special significance for WWF because it has been our logo since our founding in 1961.

            Pandas live mainly in temperate forests high in the mountains of southwest China, where they subsist almost entirely on bamboo. They must eat around 26 to 84 pounds of it every day, depending on what part of the bamboo they are eating. They use their enlarged wrist bones that function as opposable thumbs.

            A newborn panda is about the size of a stick of butter—about 1/900th the size of its mother—but females can grow up to about 200 pounds, while males can grow up to about 300 pounds as adults. These bears are excellent tree climbers despite their bulk.
                        ''',
         fact_1="Status:Vulnerable",
         fact_2="Weight: 220-330 pounds",
         fact_3="Scienific name:Ailuropoda melanoleuca",
         fact_4="Height:Adults can grow to more than four feet",
         fact_5="Habitats: Mountains, Forest Habitat",
         fact_6="Population: 1,864 in the wild",
         threats= '''
         China’s Yangtze Basin region holds the panda’s primary habitat. Infrastructure development (such as dams, roads, and railways) is increasingly fragmenting and isolating panda populations, preventing pandas from finding new bamboo forests and potential mates. Forest loss also reduces pandas’ access to the bamboo they need to survive. The Chinese government has established more than 50 panda reserves, but only around 67% of the total wild panda population lives in reserves, with 54% of the total habitat area being protected. Although poaching impacted pandas in the past, its impact declined since the enactment of the Wildlife Protection Act (1988), which bans poaching and carries severe punishments. However, pandas may get caught accidentally in snares set for musk deer or other species.''',
         call_cry='http://thestablesbb.powweb.com/WAV%20FILES/bear.wav'
     )
     
     db.session.add(animal_2)
     db.session.commit()
     
     animal_3 = Animal(
         name= 'Polar Bear',
         description= ''' 
            The largest bear in the world and the Arctic's top predator, polar bears are a powerful symbol of the strength and endurance of the Arctic. The polar bear's Latin name, Ursus maritimus, means "sea bear." It's an apt name for this majestic species, which spends much of its life in, around, or on the ocean–predominantly on the sea ice. In the United States, Alaska is home to two polar bear subpopulations Considered talented swimmers, polar bears can sustain a pace of six miles per hour by paddling with their front paws and holding their hind legs flat like a rudder. They have a thick layer of body fat and a water-repellent coat that insulates them from the cold air and water.Polar bears spend over 50% of their time hunting for food. A polar bear might catch only one or two out of 10 seals it hunts, depending on the time of year and other variables. Their diet mainly consists of ringed and bearded seals because they need large amounts of fat to survive. Polar bears rely heavily on sea ice for traveling, hunting, resting, mating and, in some areas, maternal dens. But because of ongoing and potential loss of their sea ice habitat resulting from climate change–the primary threat to polar bears Arctic-wide–polar bears were listed as a threatened species in the US under the Endangered Species Act in May 2008. As their sea ice habitat recedes earlier in the spring and forms later in the fall, polar bears are increasingly spending longer periods on land, where they are often attracted to areas where humans live.
                        ''',
         fact_1="Status:Vulnerable",
         fact_2="Weight: 800–1,300 pounds (males), 300-700 (females)",
         fact_3="Scienific name:Ursus maritimus",
         fact_4="Length:Adults 6-9 feet",
         fact_5="Habitats:Arctic Ocean, sea ice, and adjacent coastal areas",
         fact_6="Population:22,000-31,000",
         threats= '''
                Due to climate change the Arctic is heating up twice as fast as anywhere else on the planet, shrinking the Arctic sea ice cover by 14% per decade. Compared to the median sea ice cover recorded between 1981-2010, we have lost about 770,000 square miles, an area larger than Alaska and California combined. Polar bears rely on sea ice to hunt seals, rest, breed, and store energy for the summer and autumn, when food can be scarce. Sea ice now melts earlier in the spring and forms later in the autumn in the bears' southern range, like Hudson Bay and James Bay in Canada. As the bears spend longer periods without food, their health declines. For every week earlier that the ice breaks up in Hudson Bay, bears come ashore roughly 22 pounds lighter and in poorer condition. In the US, polar bears have experienced significant changes to seasonal variability and availability of sea ice habitat. For example, polar bears in the southern Beaufort Sea have recently experienced about twice as many reduced ice days over continental shelf waters than polar bears in the Chukchi and Bering Seas nearby. As a result, polar bears studied in the Chukchi and Bering Seas were larger, in better condition, and had higher reproduction rates likely since they had more access to food and did not have to fast for as long in the spring as those living in the southern Beaufort Sea. Bears must move longer distances to stay with the rapidly receding ice. In most areas, they come ashore when ice melts and rely on fat stores until the ice refreezes so they can go back out to hunt. Traditional prey species may be less accessible in a new sea ice environment, and seals that use the ice are predicted to fare poorly in the warming Arctic region.Fewer cubs- Some polar bears may suffer from malnutrition. In extreme cases they may face starvation–especially females with cubs. Unhealthy bears can lead to lower reproduction rates and extinction in certain locations. Scientists have found the main cause of death for cubs to be either lack of food or lack of fat on nursing mothers. Climate change is also resulting in more habitat fragmentation. As Arctic ice melts, polar bears are affected by increased shipping activities and a rise in opportunities for oil and gas development, that WWF is currently fighting against.In the Arctic, most industrial development has been on relatively small pieces of land. As summer sea ice retreats, a new ocean is emerging, which allows more opportunities for industrial development at sea and on larger parcels of land, which WWF is currently fighting against.
                At the same time, the retreating ice is resulting in more polar bears spending longer periods on land.
                Offshore petroleum installations and operations in the Arctic are expected to increase in number. This expansion would likely affect polar bears and their habitat in many ways, including the following: Reducing the insulation of polar bear fur from spilled oil.
                Poisoning from ingesting oil and eating contaminated prey.
                Disturbance. Destruction of habitat. Impacts on entire food webs. Oil spreading to areas outside of the Arctic Increased Arctic shipping represents a risk to polar bears. As traffic by barges, oil tankers, and cargo ships in Arctic waters increases, so do the risk of oil spills and human disturbance to polar bears. As Arctic sea ice thins and retreats, increasing numbers of polar bears are spending longer periods in the summer open-water season along Arctic coastlines. Here, their powerful sense of smell attracts them to human communities: garbage, stored food, dog teams, and animal carcasses bring them into greater conflict with Arctic people. As powerful predators, polar bears pose a major risk to human life and property. Throughout the polar bear's range, attacks on humans and property continue to rise. In recent years, more than 20 direct attacks on humans have been reported within the polar bear's range.''',
         call_cry='http://www.bigcypressswamp.com/Sounds/beargrowl.wav'
     )
     
     db.session.add(animal_3)
     db.session.commit()
     
     animal_4 = Animal(
         name= 'Black Rhino',
         description= ''' 
            Black rhinos are the smaller of the two African rhino species. The most notable difference between white and black rhinos are their hooked upper lip. This distinguishes them from the white rhino, which has a square lip. Black rhinos are browsers rather than grazers, and their pointed lip helps them feed on leaves from bushes and trees. They have two horns, and occasionally a third, small posterior horn. Populations of black rhino declined dramatically in the 20th century at the hands of European hunters and settlers. Between 1960 and 1995, black rhino numbers dropped by a sobering 98%, to less than 2,500. Since then, the species has made a tremendous comeback from the brink of extinction. Thanks to persistent conservation efforts across Africa, black rhino numbers have doubled from their historic low 20 years ago to around 5,600 today. However, the black rhino is still considered critically endangered, and a lot of work remains to bring the numbers up to even a fraction of what it once was—and to ensure that it stays there. Wildlife crime—in this case, poaching and black-market trafficking of rhino horn—continues to plague the species and threaten its recovery.''',
         fact_1="Status:Critically Endangered",
         fact_2="Weight: 1,760 - 3,080 pounds",
         fact_3="Scienific name:Diceros bicornis",
         fact_4="Height: 5.2 feet",
         fact_5="Habitats:Semi-Desert Savannah, Woodlands, Forests, Wetlands",
         fact_6="Population:5600",
         threats= '''
                Of all the threats facing black rhinos, poaching is the deadliest. Black rhinos have two horns which make them lucrative targets for the illegal trade in rhino horn A wave of poaching for rhino horn rippled through Kenya and Tanzania, continued south through Zambia's Luangwa Valley as far as the Zambezi River, and spread into Zimbabwe. Political instability and wars have greatly hampered rhino conservation work in Africa, notably in Angola, Rwanda, Somalia, and Sudan. This situation has exacerbated threats such as trade in rhino horn and increased poaching due to poverty.Today, black rhinos remain critically endangered because of rising demand for rhino horn, from some Asian consumers, particularly in Vietnam and China, who use them in folk remedies. A recent increase in poaching in South Africa threatens to erase our conservation success, reaching an apex in 2014 when 1,215 rhinos were poached. Poaching numbers are slowly decreasing—594 were poached in 2019—but poaching continues unabated with numbers remaining unsustainably high.High population density in some sites leads to lower breeding rates and increases the probability of disease transmission. Smaller, isolated populations can also be prone to genetic impacts from inbreeding.Next to poaching, loss of habitat contributes to declines in rhino population. Human activities such as agriculture, settlements, and infrastructure development result in the loss and fragmentation of rhino habitat, which increases the risk of poaching and inbreeding.''',
         call_cry='http://www.animal-sounds.org/jungle/Rhinoceros%20animals134.wav'
     )
     
     db.session.add(animal_4)
     db.session.commit()
     
     animal_5 = Animal(
         name= 'Blue Whale',
         description= ''' 
            The blue whale is the largest animal on the planet, weighing as much as 200 tons (approximately 33 elephants). The blue whale has a heart the size of a Volkswagen Beetle. Its stomach can hold one ton of krill and it needs to eat about four tons of krill each day. They are the loudest animals on Earth and are even louder than a jet engine. Their calls reach 188 decibels, while a jet reaches 140 decibels. Their low frequency whistle can be heard for hundreds of miles and is probably used to attract other blue whales.''',
         fact_1="Status:Endangered",
         fact_2="Weight:200 tons",
         fact_3="Scienific name:Balaenoptera musculus",
         fact_4="Length: 100 ft",
         fact_5="Habitats:Oceans",
         fact_6="Population:10,000 - 25,000 individuals",
         threats= '''
            Like other large whales, blue whales are threatened by environmental change including habitat loss and toxics. Blue whales can also be harmed by ship strikes and by becoming entangled in fishing gear. Although commercial whaling no longer represents a threat, climate change and its impact on krill (shrimp-like crustaceans), blue whales' major prey, makes this cetacean particularly vulnerable.Despite a moratorium on commercial whaling and a ban on international trade of whale products, three countries—Iceland, Japan, and Norway—continue their commercial whale hunts. Over 1,000 whales a year are killed for such commercial purposes. The blue whale, the largest animal ever known to have existed, was almost exterminated in the 20th century due to commercial whaling.''',
         call_cry='https://cdn.britannica.com/11/128511-005-946AE779/Call-blue-whale-waters-Vancouver-Island-British.mp3'
     )
    #  http://dobieaquaticscience.weebly.com/uploads/2/4/8/1/24814097/sound_9.mp3
     db.session.add(animal_5)
     db.session.commit()
     
     animal_6 = Animal(
         name= 'Great White Shark',
         description= ''' 
            The great white shark is the world's largest known predatory fish. It has 300 teeth, yet does not chew its food. Sharks rip their prey into mouth-sized pieces which are swallowed whole. The shark’s heavy, torpedo-shaped body allows it to cruise efficiently for long periods of time, and then suddenly switch to high speed bursts in pursuit of prey—sometimes leaping out of the water. It feeds on a broad spectrum of prey, from small fish, such as halibut, to large seals and dolphins.''',
         fact_1="Status:Vulnerable",
         fact_2="Weight: 4- 7 tons",
         fact_3="Scienific name:Carcharodon carcharias",
         fact_4="Length: 16-20 ft",
         fact_5="Habitats:Oceans",
         fact_6="Population: Unknown ",
         threats= '''Great white sharks are decreasing in numbers and are rare due to years of being hunted by man for fins and teeth, and often as a trophy for sport fishing. The white shark is often caught as bycatch by commercial fisheries and can also become entangled in meshes that protect beaches.''',
         call_cry='http://www.noiseforfun.com/waves/creature-and-animals/NFF-shark-bite.wav'
     )
     
     db.session.add(animal_6)
     db.session.commit()






def undo_animals():
    db.session.execute('TRUNCATE animals RESTART IDENTITY CASCADE;')
    db.session.commit()