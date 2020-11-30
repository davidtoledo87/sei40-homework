-- This file will create the structure of the pets table and will also insert some test (aka seed) datat into it, ie. insert some rows into the pets table

--NUKE THE TABLE SO WE CAN EASILY RE-INITIALISE OUR DATABASE BY RUNNING SQLITE3 DATABBASE.DB <pets.sql'

DROP TABLE IF EXISTS pets;

CREATE TABLE pets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,--TAKE CARE OF THE IDs for us
  name TEXT,
  species TEXT,
  description TEXT,
  roundness INTEGER,
  alive BOOLEAN,
  age INTEGER,
  image_url TEXT,
  owner_id INTEGER
  --Foreign key: this is the primary key of the 'owners' table. This must be named with the singular of the other table name, followed by '_id'
);

INSERT INTO pets(name, species, description, roundness,alive,age, image_url, owner_id)
  VALUES(
    'Ruby',
    'Canine',
    'The best dog',
    3,
    1,
    4,
    'https://images.unsplash.com/photo-1519138130-85a949fdcb4f?ixlib=rb-0.3.5&s=f340825cae4a33e3034dd209eb8c7355&w=1000&q=80',
    2 -- owner_id 2 ==> Luke (warning: hardcoded IDs will break in rails)
  );
INSERT INTO pets(name, species, description, roundness,alive,age, image_url, owner_id)
  VALUES(
    'Clarence Boddicker',
    'Human',
    'Baddie',
    8,
    0, -- false == dead
    50,
    'https://vignette.wikia.nocookie.net/robocop/images/d/dc/ClarenceBoddicker.jpg/revision/latest/scale-to-width-down/350?cb=20160816063931',
    1 -- owner_id 1 ==> Zara (warning: hardcoded IDs will break in rails)
  );
INSERT INTO pets(name, species, description, roundness,alive,age, image_url, owner_id)
  VALUES(
    'Kermit',
    'Desert frog',
    'Extremely round',
    9,
    1, -- false == dead
    3,
    'https://i.pinimg.com/originals/40/8c/91/408c91147f943416d6fc3755a3a45f14.jpg',
    2 -- owner_id 2 ==> also belongs to  Luke
  );
