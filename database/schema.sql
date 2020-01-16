DROP DATABASE IF EXISTS cows;
CREATE DATABASE cows;

USE cows;

CREATE TABLE allcows(
    id INT NOT NULL AUTO_INCREMENT,
    cow_name VARCHAR(50) NOT NULL,
    cow_description VARCHAR(250),
    PRIMARY KEY (id)
);

INSERT INTO allcows (cow_name, cow_description) VALUES ('hilly', 'hoo');

