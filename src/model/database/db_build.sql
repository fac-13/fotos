BEGIN;

DROP TABLE IF EXISTS users, photos CASCADE;
-- DROP TABLE IF EXISTS photos CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE photos(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id),
  date TIMESTAMPTZ NOT NULL DEFAULT now(),
  description VARCHAR(1000) NOT NULL,
  image_url VARCHAR(8000) NOT NULL
);

INSERT INTO users (username, password) VALUES
('Amelia', 'passwordTest'),
('Tom', 'passwordTest2'),
('Sophie', 'passwordTest3');

INSERT INTO photos(title, user_id, description, image_url) VALUES
('At the beach', 2, 'Having fun at the beach with my friends', 'https://images.unsplash.com/40/10294420724_0300cf921d_o.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b1033883b58241450dec9c72f8148b3&auto=format&fit=crop&w=1500&q=80' ),
('Palm trees', 1, 'Palm trees in Los Angeles', 'https://images.unsplash.com/photo-1499561385668-5ebdb06a79bc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=923deb764c09e84be3f0b05317a2116d&auto=format&fit=crop&w=1498&q=80');

COMMIT;
