-- Seed data for Library Management System
-- Members: 20
-- Books: 50
-- Issuances: 30

INSERT INTO members (memberName, createdAt, updatedAt)
VALUES
  ('Alice Johnson', NOW(), NOW()),
  ('Bob Smith', NOW(), NOW()),
  ('Carol Davis', NOW(), NOW()),
  ('David Wilson', NOW(), NOW()),
  ('Eva Brown', NOW(), NOW()),
  ('Frank Miller', NOW(), NOW()),
  ('Grace Taylor', NOW(), NOW()),
  ('Henry Anderson', NOW(), NOW()),
  ('Ivy Thomas', NOW(), NOW()),
  ('Jack Moore', NOW(), NOW()),
  ('Kelly Jackson', NOW(), NOW()),
  ('Liam White', NOW(), NOW()),
  ('Mia Harris', NOW(), NOW()),
  ('Noah Martin', NOW(), NOW()),
  ('Olivia Thompson', NOW(), NOW()),
  ('Paul Garcia', NOW(), NOW()),
  ('Quinn Martinez', NOW(), NOW()),
  ('Rachel Robinson', NOW(), NOW()),
  ('Samuel Clark', NOW(), NOW()),
  ('Tina Rodriguez', NOW(), NOW())
ON CONFLICT DO NOTHING;

INSERT INTO books (title, author, createdAt, updatedAt)
VALUES
  ('The Silent Forest', 'A. Green', NOW(), NOW()),
  ('Neon Skies', 'B. Adams', NOW(), NOW()),
  ('Crown of Ashes', 'C. Baker', NOW(), NOW()),
  ('Whispering Rivers', 'D. Carter', NOW(), NOW()),
  ('The Last Lighthouse', 'E. Collins', NOW(), NOW()),
  ('Starlit Atlas', 'F. Diaz', NOW(), NOW()),
  ('Broken Compass', 'G. Evans', NOW(), NOW()),
  ('Midnight Orchard', 'H. Foster', NOW(), NOW()),
  ('Ruby Horizon', 'I. Gray', NOW(), NOW()),
  ('The Vanishing Key', 'J. Hall', NOW(), NOW()),
  ('Aurora Protocol', 'K. King', NOW(), NOW()),
  ('Echoes of Tomorrow', 'L. Lopez', NOW(), NOW()),
  ('Saffron Nights', 'M. Miller', NOW(), NOW()),
  ('Paper Moons', 'N. Nelson', NOW(), NOW()),
  ('The Winter Codex', 'O. Ortiz', NOW(), NOW()),
  ('Velvet Thunder', 'P. Peterson', NOW(), NOW()),
  ('Infinite Steps', 'Q. Quinn', NOW(), NOW()),
  ('The Clockmaker''s Garden', 'R. Roberts', NOW(), NOW()),
  ('Dawn of the Dunes', 'S. Sanders', NOW(), NOW()),
  ('Cloudbound Letters', 'T. Turner', NOW(), NOW()),
  ('Crimson Letters', 'U. Turner', NOW(), NOW()),
  ('Iron & Ink', 'V. Walker', NOW(), NOW()),
  ('The Granite Star', 'W. Young', NOW(), NOW()),
  ('Lanterns in the Fog', 'X. Wright', NOW(), NOW()),
  ('Sapphire Tides', 'Y. Young', NOW(), NOW()),
  ('The Paper Empire', 'Z. Zimmerman', NOW(), NOW()),
  ('Riverstone Dreams', 'A. Green', NOW(), NOW()),
  ('Harbor of Glass', 'B. Adams', NOW(), NOW()),
  ('Riddles of the Moon', 'C. Baker', NOW(), NOW()),
  ('Atlas of Secrets', 'D. Carter', NOW(), NOW()),
  ('Gilded Silence', 'E. Collins', NOW(), NOW()),
  ('Night Market Almanac', 'F. Diaz', NOW(), NOW()),
  ('The Indigo Contract', 'G. Evans', NOW(), NOW()),
  ('Found in the Ember', 'H. Foster', NOW(), NOW()),
  ('Fables for Fireflies', 'I. Gray', NOW(), NOW()),
  ('The Orchard Code', 'J. Hall', NOW(), NOW()),
  ('Sundial Hearts', 'K. King', NOW(), NOW()),
  ('The Cipher Orchard', 'L. Lopez', NOW(), NOW()),
  ('Voyage of the Vellum', 'M. Miller', NOW(), NOW()),
  ('Tides of Tomorrow', 'N. Nelson', NOW(), NOW()),
  ('The Hidden Timeline', 'O. Ortiz', NOW(), NOW()),
  ('Maps for the Lost', 'P. Peterson', NOW(), NOW()),
  ('The Last Download', 'Q. Quinn', NOW(), NOW()),
  ('Cobalt Whispers', 'R. Roberts', NOW(), NOW()),
  ('The Bronze Door', 'S. Sanders', NOW(), NOW()),
  ('Sunken Stories', 'T. Turner', NOW(), NOW()),
  ('The Velvet Algorithm', 'U. Walker', NOW(), NOW()),
  ('Chronicles of Copper', 'V. Walker', NOW(), NOW()),
  ('The Emerald Circuit', 'W. Young', NOW(), NOW()),
  ('Lumen & Lace', 'X. Wright', NOW(), NOW())
ON CONFLICT DO NOTHING;

-- Create 30 issuance records across members/books.
-- issuedDate/targetReturnDate are set so that some are outstanding and some due today.
INSERT INTO issuances (memberId, bookId, issuedDate, targetReturnDate, createdAt, updatedAt)
VALUES
  (1, 1,  CURRENT_DATE - INTERVAL '10 days', CURRENT_DATE - INTERVAL '2 days', NOW(), NOW()),
  (2, 2,  CURRENT_DATE - INTERVAL '20 days', CURRENT_DATE + INTERVAL '5 days', NOW(), NOW()),
  (3, 3,  CURRENT_DATE - INTERVAL '7 days',  CURRENT_DATE, NOW(), NOW()),
  (4, 4,  CURRENT_DATE - INTERVAL '30 days', CURRENT_DATE + INTERVAL '1 days', NOW(), NOW()),
  (5, 5,  CURRENT_DATE - INTERVAL '1 days',  CURRENT_DATE + INTERVAL '14 days', NOW(), NOW()),
  (6, 6,  CURRENT_DATE - INTERVAL '9 days',  CURRENT_DATE, NOW(), NOW()),
  (7, 7,  CURRENT_DATE - INTERVAL '15 days', CURRENT_DATE + INTERVAL '10 days', NOW(), NOW()),
  (8, 8,  CURRENT_DATE - INTERVAL '5 days',  CURRENT_DATE + INTERVAL '2 days', NOW(), NOW()),
  (9, 9,  CURRENT_DATE - INTERVAL '12 days', CURRENT_DATE + INTERVAL '20 days', NOW(), NOW()),
  (10,10,  CURRENT_DATE - INTERVAL '3 days',  CURRENT_DATE, NOW(), NOW()),

  (11,11,  CURRENT_DATE - INTERVAL '18 days', CURRENT_DATE + INTERVAL '3 days', NOW(), NOW()),
  (12,12,  CURRENT_DATE - INTERVAL '22 days', CURRENT_DATE + INTERVAL '6 days', NOW(), NOW()),
  (13,13,  CURRENT_DATE - INTERVAL '2 days',  CURRENT_DATE + INTERVAL '1 days', NOW(), NOW()),
  (14,14,  CURRENT_DATE - INTERVAL '8 days',  CURRENT_DATE, NOW(), NOW()),
  (15,15,  CURRENT_DATE - INTERVAL '25 days', CURRENT_DATE + INTERVAL '7 days', NOW(), NOW()),
  (16,16,  CURRENT_DATE - INTERVAL '6 days',  CURRENT_DATE + INTERVAL '8 days', NOW(), NOW()),
  (17,17,  CURRENT_DATE - INTERVAL '11 days', CURRENT_DATE + INTERVAL '4 days', NOW(), NOW()),
  (18,18,  CURRENT_DATE - INTERVAL '14 days', CURRENT_DATE + INTERVAL '9 days', NOW(), NOW()),
  (19,19,  CURRENT_DATE - INTERVAL '4 days',  CURRENT_DATE + INTERVAL '12 days', NOW(), NOW()),
  (20,20,  CURRENT_DATE - INTERVAL '1 days',  CURRENT_DATE + INTERVAL '20 days', NOW(), NOW()),

  (1, 21, CURRENT_DATE - INTERVAL '13 days', CURRENT_DATE + INTERVAL '5 days', NOW(), NOW()),
  (2, 22, CURRENT_DATE - INTERVAL '17 days', CURRENT_DATE + INTERVAL '2 days', NOW(), NOW()),
  (3, 23, CURRENT_DATE - INTERVAL '4 days',  CURRENT_DATE, NOW(), NOW()),
  (4, 24, CURRENT_DATE - INTERVAL '27 days', CURRENT_DATE + INTERVAL '1 days', NOW(), NOW()),
  (5, 25, CURRENT_DATE - INTERVAL '8 days',  CURRENT_DATE + INTERVAL '3 days', NOW(), NOW()),
  (6, 26, CURRENT_DATE - INTERVAL '9 days',  CURRENT_DATE + INTERVAL '30 days', NOW(), NOW()),
  (7, 27, CURRENT_DATE - INTERVAL '5 days',  CURRENT_DATE, NOW(), NOW()),
  (8, 28, CURRENT_DATE - INTERVAL '6 days',  CURRENT_DATE + INTERVAL '6 days', NOW(), NOW()),
  (9, 29, CURRENT_DATE - INTERVAL '16 days', CURRENT_DATE + INTERVAL '4 days', NOW(), NOW()),
  (10,30, CURRENT_DATE - INTERVAL '2 days',  CURRENT_DATE + INTERVAL '9 days', NOW(), NOW())
ON CONFLICT DO NOTHING;

