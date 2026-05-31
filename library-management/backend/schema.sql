-- Schema for Library Management System
-- Entities:
--  1) Member
--  2) Book
--  3) Issuance

CREATE TABLE IF NOT EXISTS members (
  id SERIAL PRIMARY KEY,
  memberName VARCHAR(200) NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
  updatedAt TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(250) NOT NULL,
  author VARCHAR(200) NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
  updatedAt TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS issuances (
  id SERIAL PRIMARY KEY,
  memberId INTEGER NOT NULL,
  bookId INTEGER NOT NULL,
  issuedDate DATE NOT NULL,
  targetReturnDate DATE NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
  updatedAt TIMESTAMP NOT NULL DEFAULT NOW(),
  CONSTRAINT fk_issuances_member
    FOREIGN KEY (memberId)
    REFERENCES members(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT fk_issuances_book
    FOREIGN KEY (bookId)
    REFERENCES books(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT chk_issued_target_dates
    CHECK (targetReturnDate >= issuedDate)
);

