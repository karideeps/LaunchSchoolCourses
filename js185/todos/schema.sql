CREATE TABLE todolists (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL UNIQUE,
  username TEXT NOT NULL REFERENCES users(username)
);

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  done BOOLEAN NOT NULL DEFAULT false,
  todolist_id INT  NOT NULL REFERENCES todolists(id) ON DELETE CASCADE,
  username TEXT NOT NULL REFERENCES users(username) ON DELETE CASCADE
);

CREATE TABLE users (
  username TEXT PRIMARY KEY,
  password TEXT NOT NULL
);