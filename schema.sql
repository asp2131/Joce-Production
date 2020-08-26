/**
 * Shell into postgres by running: sudo -u postgres psql
 * Once shelled into psql initilatize schmea by running: \ir schema.sql
 */
DROP DATABASE IF EXISTS joce;
CREATE DATABASE joce;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS interests;
DROP TABLE IF EXISTS polls;
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS rating_types;
DROP TABLE IF EXISTS followers;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS answers;


CREATE TABLE users (
  id SERIAL PRIMARY KEY ,
  id_google int,
  email varchar(60),
  username varchar(60),
  bio varchar(75),
  profile_image varchar(255)
);

CREATE TABLE locations (
  id SERIAL PRIMARY KEY ,
  id_user varchar(255),
  lat int,
  long int
);

CREATE TABLE interests (
  id SERIAL PRIMARY KEY ,
  id_user int,
  sports varchar(35),
  tech varchar(35),
  music varchar(35),
  fashion varchar(35),
  cooking varchar(35),
  travel varchar(35),
  politics varchar(35),
  other varchar(35)
);

CREATE TABLE polls (
  id  SERIAL PRIMARY KEY ,
  id_user int,
  media varchar(255),
  id_rating_type int
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY  ,
  id_user int,
  id_recipient int,
  created_at timestamp,
  messages varchar(255)
);


CREATE TABLE followers (
  id SERIAL PRIMARY KEY ,
  id_user int,
  id_follower int
);

CREATE TABLE rating_types (
  id SERIAL PRIMARY KEY ,
  meter varchar(255),
  abc varchar(255),
  five_star varchar(255)
);

CREATE TABLE questions (
  id SERIAL PRIMARY KEY ,
  id_user int,
  char_count int,
  text varchar(200)
);

CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  id_user int,
  id_question int
);

