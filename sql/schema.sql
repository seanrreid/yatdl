CREATE TABLE users (
    id serial PRIMARY KEY,
    first_name varchar(100),
    last_name varchar(100),
    email varchar(200),
    password varchar(2000)
);

CREATE TABLE tasks (
    id serial PRIMARY KEY,
    task text,
    complete boolean DEFAULT false,
    user_id integer REFERENCES users (id)
);

