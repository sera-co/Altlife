# Validation Checklist

## 1) Database
- [ ] Run `docker-compose up --build`
- [ ] Backend connects to PostgreSQL successfully
- [ ] Tables exist: `members`, `books`, `issuances`
- [ ] Primary keys exist
- [ ] Foreign keys exist (`issuances.memberId -> members.id`, `issuances.bookId -> books.id`)
- [ ] Constraints exist (NOT NULL, FK constraints)
- [ ] `createdAt` and `updatedAt` timestamps are present

## 2) Seed data
- [ ] Seed inserts:
  - [ ] 20 members
  - [ ] 50 books
  - [ ] 30 issuance records

## 3) API key security
- [ ] Call any endpoint without `x-api-key` => **401**
- [ ] Call with wrong `x-api-key` => **401**
- [ ] Call with correct `x-api-key` => **200/201**

## 4) REST endpoints
For each of `members`, `books`, `issuances`:
- [ ] `POST` creates record and returns JSON
- [ ] `GET` list returns JSON array
- [ ] `GET /:id` returns JSON object
- [ ] `PUT /:id` updates record and returns JSON

## 5) Input validation
- [ ] Missing required fields return **400**
- [ ] Invalid types return **400**

## 6) Error handling
- [ ] Unknown route returns **404** JSON
- [ ] Server errors return **500** JSON

## 7) Analytics queries
- [ ] `/analytics/books-never-borrowed` returns books not present in `issuances`
- [ ] `/analytics/outstanding-books` returns issuances with `targetReturnDate >= CURRENT_DATE`
- [ ] `/analytics/top-10-most-borrowed-books` returns top 10 with:
  - `bookName`
  - `timesBorrowed`
  - `uniqueMembers`

## 8) Frontend dashboard
- [ ] Frontend loads
- [ ] Shows loading spinner/placeholder while fetching
- [ ] Shows error message if request fails
- [ ] Table includes columns:
  - Member Name
  - Book Name
  - Issued Date
  - Target Return Date
- [ ] Displays issuances where `targetReturnDate` is today

## Docker commands summary
- [ ] Start: `docker-compose up --build`
- [ ] Logs: `docker-compose logs -f`
- [ ] Stop: `docker-compose down`

