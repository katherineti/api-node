-- CREATE DATABASE katherine;

-- \l

-- \c katherine;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
signupsignup    password VARCHAR(255) NOT NULL,
    name VARCHAR(40),
    lastname VARCHAR(40),
    gender VARCHAR(10) CHECK (gender IN ('male', 'female')),
    phone VARCHAR(20),
    address VARCHAR(255),
    city VARCHAR(255),
    zip_code VARCHAR(255),
    birthdate VARCHAR(40),
    url_image VARCHAR(200),
    id_departamento INT,
    id_puesto INT,
    status INT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO users (name, email)
    VALUES ('joe', 'joe@ibm.com'),
    ('ryan', 'ryan@faztweb.com');


INSERT INTO users (name, email)
    VALUES ('joe@ibm.com','joe','Joe', 'Castillo', 'M', 'direcion', '+584123456789', '19980916', 5, 7, 1 )

select * from users;