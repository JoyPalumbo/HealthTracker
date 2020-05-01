DROP DATABASE IF EXISTS health_diary;

CREATE DATABASE health_diary;

USE health_diary;

CREATE TABLE food (
  id int NOT NULL AUTO_INCREMENT,
  food_name varchar(50) NOT NULL,
   calories int,
   carbs int,
   sugar int,
   fat int, 
   other varchar(100),
   amount int,
    col TIMESTAMP NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE water (
  id int NOT NULL AUTO_INCREMENT,
  ounces int not null,
  col TIMESTAMP NOT NULL,
  PRIMARY KEY (ID)
);


CREATE TABLE exercise (
  id int NOT NULL AUTO_INCREMENT,
  exercise varchar(100) Not null,
  notes varchar(200),
  minutes int,
  reps int,
  col TIMESTAMP NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE profile (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) Not null,
  weight_goal int ,
  current_weight int,
  water_goal int,
  calorie_goal int,
  col TIMESTAMP NOT NULL,
  PRIMARY KEY (ID)
);


/*  Execute this file from the command line by typing:
 *    //mysql -u root -p
 /in seperate termimal enter below command to update database
 mysql -u root < schema.sql
 *  to create the database and the tables.*/