CREATE TABLE expenses (
  id SERIAL PRIMARY KEY,
  amount NUMERIC(6, 2) NOT NULL CHECK (amount > 0),
  memo TEXT NOT NULL,
  created_on DATE DEFAULT NOW() NOT NULL
);

INSERT INTO expenses
(amount, memo)
VALUES
(14.56, 'Pencils'),
(3.29, 'Coffee'),
(49.99, 'Text Editor'),
(3.59, 'More Coffee');