var toonzy = toonzy || {};
toonzy.data = {
	"character": {
		"charactertype": [{
			"lower": 1,
			"upper": 15,
			"type": "Human"
		}, {
			"lower": 16,
			"upper": 59,
			"type": "Critter"
		}, {
			"lower": 60,
			"upper": 89,
			"type": "Thing"
		}, {
			"lower": 90,
			"upper": 95,
			"type": "Mythic"
		}, {
			"lower": 96,
			"upper": 99,
			"type": "Monstrous"
		}, {
			"lower": 100,
			"upper": 100,
			"type": "Alien"
		}],
		"human": {
			"physical": ["Aristocratic", "Baby", "Bald", "Fat", "Glamorous", "Goth", "Hairy", "Hunchback", "Jock", "Nerd", "Nudist", "Old", "Preppie", "Sexy", "Short", "Skinny", "Shiny", "Rough", "Tall", "Young"],
			"color": ["Black & White", "Blue", "Brown", "Green", "Orange", "Peach", "Pink", "Purple", "Red", "Yellow"]
		},

		"critter": ["Aardvark", "Alligator", "Amoeba", "Ant", "Antelope", "Baboon", "Badger", "Bandicoot", "Bat", "Roll on Bear Table", "Bee or Wasp (Flip a coin)", "Boar", "Buffalo", "Butterfly or Moth (Flip a coin)", "Catfish", "Centipede", "Chipmunk", "Cow", "Coyote", "Roll on Bird Table", "Crab or Lobster (Flip a coin)", "Crayfish", "Crocodile", "Dragonfly", "Desman", "Deer: Doe or Stag (Flip a coin)", "Dolphin", "Donkey", "Earwig", "Roll on Cat Table", "Eel", "Elephant", "Fish", "Fly", "Fox", "Frog or Toad (Flip a coin)", "Fruit Fly", "Garter Snake", "Goat", "Roll on Dinosaur Table", "Giraffe", "Gnat", "Gopher", "Groundhog", "Hedgehog", "Hippopotamus", "Horse or Pony", "Iguana", "Kangaroo", "Roll on Dog Table", "Ladybug", "Leech", "Lemming", "Lemur", "Lizard", "Llama", "Mole", "Moose", "Mouse", "Roll on Monkey Table", "Mule", "Mushroom", "Octopus", "Opossum", "Otter", "Panther", "Poison Dart Frog", "Puffer Fish", "Puppy", "Roll on Owl Table", "Pig", "Platypus", "Porcupine", "Rabbit", "Rat", "Rhinoceros", "Sea Sponge", "Shark", "Sheep", "Roll on Prehistoric Table", "Skunk", "Sloth", "Snail", "Snake", "Spider", "Squid", "Squirrel or Flying Squirrel", "Stingray", "Turtle", "Roll on Primate Table", "Water Strider", "Walrus", "Weasel", "Whale", "Wolf", "Wolverine", "Wombat", "Worm or Caterpillar", "Zebra", "Whatchamacallit"],
		"bear": ["Black Bear", "Grizzly Bear", "Koala Bear", "Panda Bear", "Polar Bear", "Teddy Bear"],
		"bird": ["Albatross", "Blackbird", "Bluejay", "Canary", "Chicken: Hen or Rooster", "Cuckoo", "Crow", "Dodo", "Duck", "Eagle", "Egret", "Finch", "Flamingo or Emu", "Hawk", "Hummingbird", "Kiwi", "Martin", "Mockingbird", "Parrot", "Pigeon", "Penguin", "Raven", "Seagull", "Songbird", "Stork", "Swan", "Turkey", "Vulture", "Woodpecker", "Wren"],
		"cat": ["Bobcat", "Cheetah", "House Cat", "Jaguar", "Leopard", "Lion", "Lynx", "Puma", "Tiger", "Wildcat"],
		"dinosaur": ["Allosaurus", "Ankylosaurus", "Brontosaurus", "Diplodocus", "Ichthyosaurus", "Plesiosaurus", "Stegosaurus", "Triceratops", "Tyrannosaurus Rex", "Velociraptor"],
		"dog": ["Basset Hound", "Beagle", "Borzoi", "Bulldog", "Chihuahua", "Collie", "Corgi", "Dachshund", "Doberman Pinscher", "Poodle", "Pug", "Retriever", "Shepherd", "Spaniel", "Terrier", "Miniature (Reroll for Type)"],
		"monkey": ["DeBrazza’s Monkey", "Douc Langur Monkey", "Emperor Tamarin", "Golden Lion Tamarin", "Mandrill", "Moustached Tamarin", "Owl Monkey", "Patas Monkey", "Pygmy Marmoset", "Red-Bellied Titi", "Red Colobus Monkey", "Roloway Monkey", "Sock Monkey", "Spider Monkey", "Squirrel Monkey", "Proboscis Monkey", "Three-Striped Night Monkey", "Tufted Capuchins", "Velvet Monkey", "White-Faced Saki Monkey"],
		"owl": ["Barn or Great Horned Owl", "Little or Pygmy Owl", "Screech Owl", "Snowy Owl"],
		"prehistoric": ["Dicynodon", "Dimetrodon", "Edaphosaurus", "Ichthyostega", "Irish Elk", "Moschops", "Saber Tooth Critter *", 
"Woolly Critter *"],
		"primate": ["Neanderthal or Cro-Magnon", "Chimp", "Gibbon", "Gorilla", "Orangutan", "Roll on Monkey Table"],

		"thing": ["Roll Again and Combine with a Roll on Critter Table", "Anvil", "Art Object", "Ball", "Roll on Aircraft Table", "Ballpoint Pen", "Back Scratcher ", "Blackboard", "Blender", "Roll on Boat Table", "Bomb", "Book", "Bottle of Glue", "Broom", "Roll on Boat Table", "Bucket", "Building", "Candle", "Candelabra", "Roll on Car Table", "Cannon", "Cardboard Box", "Coat", "Clock", "Roll on Dinnerware Table ", "Cloud", "Coin", "Dishwasher", "Door", "Roll on Food Table", "Drill", "Fish Tank", "Foot", "Fridge", "Roll on Fruity Table", "Frying Pan", "Garbage Can", "Giant Flying Head (Roll on Critter Table)", "Gingerbread-Man", "Roll on Furniture Table", "Glove", "Glow Stick", "Hammer", "Handle", "Roll on Holiday Figurine Table", "Jelly Jar", "Lamp", "Lawn Ornament (Roll on Character Type Table) ", "Meat Cleaver", "Roll on Musical Instruments Table", "Meteor", "Milk Pitcher", "Mirror", "Mousetrap", "Roll on Nuts Table", "Moustache", "Newspaper", "Note Pad", "Nutcracker", "Roll on Plants Table ", "Holiday Ornament (Roll on Holiday Figurine Table)", "Padlock", "Picture Frame", "Pickaxe", "Roll on Silverware Table", "Pot or Pan (Flip a coin)", "Red Wagon", "Rocket or Robot (Flip a coin)", "Rug", "Roll on Truck Table", "Saw", "Scarecrow", "Screwdriver", "Silver Dollar", "Roll on Vegetables Table", "Shadow (Roll on Critter Table for Type)", "Smokestack or Chimney", "Soap", "Sock: Single or Pair (Flip a coin)", "Roll on Vehicles Table", "Spot Light", "Star (roll 2d4 for number of points)", "Stuffed Animal (Roll on Critter Table for Type)", "Sun or Moon", "Tattoo or Drawing (Roll on Critter Table for Type)", "TNT Wired to a Detonator Plunger", "Toaster", "Toothbrush", "Tombstone", "Top Hat", "Towel", "Toy (To See What Type of Toy, Roll on Character Type Table)", "Toy (Roll on Monstrous Table for Type)", "Trophy", "Umbrella", "Uranium", "Vest", "Vase", "Wave", "The Kitchen Sink"],
		"aircraft": ["Balloon (Hot Air or Helium)", "Blimp or Zeppelin (Flip a coin)", "Drone", "Hang Glider", "Helicopter", "Jet Airplane", "Kite", "Paper Airplane", "Parachute", "Propeller Airplane"],
		"boat": ["Battleship", "Cargo Ship", "Dinghy or Yacht (Flip a coin)", "Fishing Boat", "Pirate Ship", "Sailboat", "Submarine", "Tugboat"],
		"car": ["Ambulance", "Clown Car", "Dune Buggy", "Drag Racer", "Jalopy or Clunker", "Jeep or SUV (Flip a coin)", "Police Car", "Race Car", "Sedan or Sports Car (Flip a coin)", "Station Wagon"],
		"dinnerware": ["Bread Plate", "Butter Dish", "Coffee Cup", "Dessert Plate", "Dinner Plate", "Salad Plate", "Salt Shaker", "Serving Bowl", "Serving Platter", "Soup Bowl"],
		"food": ["Bottle or Can of Soda (Flip a coin)", "Cookie", "Danish or Croissant (Flip a coin)", "Doughnut or Coffee", "Hamburger", "Hot Dog", "Ketchup Bottle", "Loaf of Bread", "Mustard Bottle", "Pizza", "Toast", "Roll on Fruity Table"],
		"fruity": ["Apple", "Apricot", "Avocado", "Banana", "Berry (pick Strawberry, Raspberry, Blueberry, etc.)", "Bread Fruit or Cocoanut", "Cantaloupe", "Cherry", "Fig", "Grape or Raisin (Flip a coin)", "Kiwi", "Lemon", "Lime", "Mango", "Orange", "Peach", "Pear", "Pomegranate", "Tangerine", "Watermelon"],
		"furniture": ["Baby’s High Chair", "Bar Stool", "Bed", "Bookcase", "Coffee Table", "Desk", "Dining Table", "Dresser or Bureau", "End Table", "Filing Cabinet", "Recliner", "Pie Cart", "Pole Lamp", "Rocking Chair", "Sofa", "Tea Cart"],
		"holidayfigurine": ["Baby New Year", "Cupid or Tooth Fairy (Flip a coin)", "Dragon (Chinese New Year)", "Easter Bunny", "Grandfather Time", "Groundhog (for Groundhog Day)", "Old Man Winter or Jack Frost", "Santa Claus", "Skeleton (for La Calavera Catrina)", "Snowman", "St. Patrick or Leprechaun", "Pick Your Own Holiday Figurine (For example, National Tartan Day, Texas Independence Day, etc.)"],
		"musicalinstruments": ["Accordion", "Bagpipes", "Banjo", "Beatbox", "Bell", "Clarinet", "Djembe", "Drum (or Drum Set)", "Flute", "Guitar", "Harmonica or Harp", "Marimba", "Oboe", "Panpipes", "Piano", "Pipe Organ", "Saxophone", "Sousaphone", "Spoons", "Taiko Drum", "Triangle", "Trombone", "Trumpet", "Tuba", "Ukulele", "Viola", "Violin", "Wood Block", "Whistle", "Xylophone"],
		"nuts": ["Acorn", "Almond", "Cashew", "Chestnut", "Coconut", "Macadamia Nut", "Peanut", "Pecan", "Pistachio", "Walnut"],
		"plants": ["Branch or Stick", "Flower (in Pot)", "Grass", "Palm Tree", "Pine Tree", "Seed", "Shrubbery or Bush", "Tree (with leaves)", "Vine", "Weed"],
		"silverware": ["Bread Tongs", "Chopsticks", "Fork", "Knife", "Spatula", "Spoon or Spork (Flip a coin)"],
		"truck": ["Cement Mixer", "Delivery Truck", "Dump Truck", "Fire Truck", "Garbage Truck", "Pickup Truck"],
		"vegetables": ["Asparagus", "Bean (d6 in number, or Can)", "Beet", "Broccoli", "Cabbage", "Carrot", "Celery", "Corn", "Peas (d6 in number, or Can) Pickle", "Potato", "Pumpkin or Other Squash"],
		"vehicles": ["Bicycle", "Bulldozer", "Roll on Boat Table", "Crane", "Elevator", "Flying Carpet", "Flying Saucer", "Forklift", "Motorcycle", "Pogo Stick", "Red Wagon", "Roller Skates", "School Bus", "Skateboard", "Steamroller", "Surf Board", "Tractor", "Tricycle", "Unicycle", "Van"],
	
		"mythic": ["Centaur", "Chupacabra", "Dragon", "Elf", "Fairy", "Giant", "Goblin", "Golem", "Griffin", "Leprechaun or Gnome (Flip a coin)", "Medusa", "Mermaid or Merman", "Minotaur", "Ogre", "Pegasus", "Satyr or Nymph", "Troll", "Unicorn", "Wyvern", "Yeti"],
		"alien": ["An Amorphous Ball of Light", "Big-Brain Alien", "Giant Bug or Bug-Eyed Monster", "Little Green Man", "Martian", "Mole-Man", "Moon-Man", "Reptoid (wears sunglasses)", "Robot or Android", "Tiny Blue Alien", "Tall Thin Grey Alien", "Roll Twice and Combine"],

		"monstrousbody": ["Blob or Amoeba (Flip a coin)", "Snake-like (No Legs)", "Bipedal (2 Legs)", "Quadruped (4 Legs)", "Octopoid (2d8 x2 Tentacles)", "Centipede-like (2d100 x2 Legs)"],
		"monstrousarms": [{
			"lower": 1,
			"upper": 5,
			"type": "1"
		}, {
			"lower": 6,
			"upper": 20,
			"type": "2 or 3 (Flip a coin)"
		}, {
			"lower": 21,
			"upper": 36,
			"type": "2d4"
		}, {
			"lower": 37,
			"upper": 50,
			"type": "2d6"
		}, {
			"lower": 51,
			"upper": 74,
			"type": "2d8"
		}, {
			"lower": 75,
			"upper": 80,
			"type": "2d10"
		}, {
			"lower": 81,
			"upper": 90,
			"type": "2d12"
		}, {
			"lower": 91,
			"upper": 95,
			"type": "2d16"
		}, {
			"lower": 96,
			"upper": 98,
			"type": "2d20"
		}, {
			"lower": 99,
			"upper": 100,
			"type": "d100"
		}],
		"monstrouseyes": [{
			"lower": 1,
			"upper": 20,
			"type": "1"
		}, {
			"lower": 21,
			"upper": 30,
			"type": "2"
		}, {
			"lower": 31,
			"upper": 40,
			"type": "3d4"
		}, {
			"lower": 41,
			"upper": 50,
			"type": "3d6"
		}, {
			"lower": 51,
			"upper": 60,
			"type": "3d8"
		}, {
			"lower": 61,
			"upper": 80,
			"type": "3d10"
		}, {
			"lower": 81,
			"upper": 85,
			"type": "3d12"
		}, {
			"lower": 86,
			"upper": 90,
			"type": "3d16"
		}, {
			"lower": 91,
			"upper": 95,
			"type": "3d20"
		}, {
			"lower": 96,
			"upper": 98,
			"type": "3d30"
		}, {
			"lower": 99,
			"upper": 100,
			"type": "d100"
		}],
		"monstrousheads": [{
			"lower": 1,
			"upper": 20,
			"type": "1"
		}, {
			"lower": 21,
			"upper": 40,
			"type": "2"
		}, {
			"lower": 41,
			"upper": 60,
			"type": "d8"
		}, {
			"lower": 61,
			"upper": 80,
			"type": "d10"
		}, {
			"lower": 81,
			"upper": 85,
			"type": "d12"
		}, {
			"lower": 86,
			"upper": 90,
			"type": "d16"
		}, {
			"lower": 91,
			"upper": 95,
			"type": "d20"
		}, {
			"lower": 96,
			"upper": 98,
			"type": "d30"
		}, {
			"lower": 99,
			"upper": 100,
			"type": "d100"
		}],
		"monstrousskin": ["Bumpy", "Leathery", "Scaly", "Slimy", "Smooth", "Spiky", "Transparent", "Warty"],

		"personalitytraits": ["Roll Twice and Combine", "Roll Twice and Combine", "Adventurous", "Allergic", "Angry (at everything)", "Anxious and Nervous", "Argumentative (No, I’m not!)", "Arrogant", "Artsy", "Animal Lover", "Blabbermouth (i.e. can’t keep a secret)", "Brave", "Cheerful", "Companionable", "Clean Freak", "Clumsy and Unlucky", "Confident", "Compulsive Liar", "Conservative", "Courageous", "Cowardly", "Curious", "Cries Easily", "Dirty", "Dreamer", "Energetic", "Emphatic", "Fanatical", "Fatuous", "Fiery", "Follower", "Forgetful", "Friendly (everyone is your friend)", "Frugal", "Glamorous", "Goofy", "Guilty", "Gullible", "Hard Working", "Hot Tempered", "Humble", "Hyperactive", "Ignorant and Uneducated", "Imaginative", "Impulsive", "Indecisive", "Insulting", "Irresponsible", "Irritable", "Intoxicated", "Leaps Before Looking", "Loyal", "Loner or Lonely (Flip a coin)", "Manic-Depressive", "Manly and Rugged", "Mean", "Megalomaniacal", "Miserly", "Misinformed", "Nosy Busybody", "Neurotic", "Nihilist", "Obnoxious", "Obsessive", "On a Diet", "Opinionated About Everything", "Optimistic", "Outspoken", "Overly Nurturing", "Overeducated", "Pacifist", "Paranoid or Schizoid (Flip a coin)", "Passionate", "Patriotic", "Perfectionist", "Playful", "Power Hungry", "Prideful", "Prudish", "Romantic", "Rowdy", "Rude", "Rustic", "Sarcastic", "Selfish", "Sensitive", "Serious", "Short Tempered", "Shy", "Silly", "Slow and Sluggish", "Sly", "Stinker", "Stoner", "Sparky", "Stylish", "Tense", "Tough", "Trusting", "Unconcerned"],
		"niche": ["Actor", "Angel", "Artist", "Astronaut", "Roll on Athletes Table", "Ballerina or Dancer (Flip a coin)", "Beggar", "Bodyguard", "Boxer or Wrestler (Flip a coin)", "Roll on Child Table", "Business Tycoon", "Cannibal", "Castaway", "Caveman", "Roll on Cook Table", "Clown", "Comedian", "Construction Worker", "Cowboy", "Crook", "Curmudgeon", "Deep Sea Diver", "Detective", "Devil", "Dictator", "DJ", "Doctor", "Do-Gooder", "Engineer", "Explorer", "Fairy", "Farmer or Herder (Flip a coin)", "Fashion Designer", "Fashion or Super Model", "Forest Ranger", "Genie", "Ghost", "Giant", "Grandparent", "Haberdasher", "Hairdresser", "Hillbilly", "Holy Man/Woman", "Hunter or Gatherer (Flip a coin)", "Imaginary Friend", "Inventor", "Jackboot Fascist", "Janitor", "Jester", "Roll Twice and Combine", "Knight", "Kung-Fu Master", "Lawyer", "Magician (Real Magic or Stage)", "Roll on Military Table", "Maid", "Mailman/woman", "Mayor", "Mobster", "Roll on Musician Table", "Movie Star", "Ninja", "Nobleman/woman", "Nurse", "Optometrist", "Pauper", "Pet", "Pilot", "Philosopher", "Roll on Politician Table", "Plumber", "Police or Firefighter", "Psychologist or Counselor", "Product Tester", "Professor or School Teacher", "Race Car Driver", "Real Estate Agent", "Rebel or Conformist (Flip a coin)", "Reporter (TV or Newspaper)", "Roll on Rich Table", "Saint", "Samurai or Sensei (Flip a coin)", "Seamstress", "Scout (Indian or Boy/Girl)", "Roll on Scientist Table", "Scuba Diver", "Sea Captain", "Secret Agent", "Shepherd", "Roll on Sailor Table", "Soldier", "Street Urchin", "Stuntman or Thrill Seeker", "Roll on Student Table", "Superhero", "Swashbuckler or Musketeer", "Toy Maker", "Undead or Zombie (Flip a coin)", "Waiter", "Witch or Wizard (Flip a coin)"],
		"athletes": ["Baseball", "Basketball", "Football (American)", "Hockey", "Matador", "Soccer", "Track", "Pick Your Own Sport (i.e. Caber Toss)"],
		"child": ["Baby", "Toddler", "Preteen", "Teen"],
		"cook": ["Baker", "Chef (TV or French)", "Fry Cook", "Restaurateur"],
		"musician": ["Composer", "Instrumentalist (Roll on Musical Instruments Table)", "Pop Star", "Opera Singer"],
		"military": ["General", "Colonel", "Sergeant", "Private"],
		"politician": ["President", "Premier", "Chairperson", "Senator", "Congressman", "Mayor", "Bureaucrat", "Dogcatcher", "DMV Attendant", "Sanitation Engineer"],
		"rich": ["Billionaire", "Newly Rich", "Raised Rich", "The Richest Person in World"],
		"sailor": ["Fisherman", "Navy Sailor", "Pirate", "Viking"],
		"scientist": ["Alchemist", "Child Genius", "Mad Scientist", "Science Professor (Roll on Student Table for Where)"],
		"student": ["Elementary", "High School", "College", "Martial Arts Academy"]


	}
}