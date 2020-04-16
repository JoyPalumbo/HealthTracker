DROP DATABASE IF EXISTS health_diary;

CREATE DATABASE health_diary;

USE health_diary;

CREATE TABLE food (
  id int NOT NULL AUTO_INCREMENT,
  food_name varchar(50) NOT NULL,
   calories int,
   fat int, 
   carbs int,
   sugar int,
   amount int,
  PRIMARY KEY (ID)
);

CREATE TABLE water (
  id int NOT NULL AUTO_INCREMENT,
  ounces int not null,
  PRIMARY KEY (ID)
);


CREATE TABLE exercise (
  id int NOT NULL AUTO_INCREMENT,
  notes varchar(200) NOT NULL,
  minutes int not null,
  PRIMARY KEY (ID)
);


/*  Execute this file from the command line by typing:
 *    //mysql -u root -p
 mysql -u root < server/schema.sql
 *  to create the database and the tables.*/