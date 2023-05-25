CREATE TABLE todolists (
  id SERIAL PRIMARY KEY,
  title text NOT NULL UNIQUE
);

CREATE TABLE todos (
  id serial PRIMARY KEY,
  title text NOT NULL,
  done BOOLEAN NOT NULL DEFAULT false,
  todolist_id int  NOT NULL REFERENCES todolists(id) ON DELETE CASCADE
);