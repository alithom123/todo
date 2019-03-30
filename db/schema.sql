-- Create the database wishes_db and specified it for use.
CREATE DATABASE todo_db;
USE todo_db;

-- Create the table wishes.
CREATE TABLE todos 
(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL, 
    details VARCHAR(255),
    done TINYINT(1) DEFAULT 0
);

/*
To run this file, we do the following in our Terminal:
1. Go to the directory of this sql file.
2. Get into our mysql console.
3. Run "source schema.sql"
*/