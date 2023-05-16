CREATE TABLE expenses (
  id SERIAL PRIMARY KEY,
  amount NUMERIC(6, 2) NOT NULL CHECK (amount > 0),
  memo TEXT NOT NULL,
  create_on DATE DEFAULT NOW() NOT NULL
);