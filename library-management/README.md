# Library Management System (Node.js + Express + PostgreSQL + Sequelize + React)

## Project structure
```
library-management
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   └── app.js
│   ├── package.json
│   ├── Dockerfile
│   └── .env.example
├── frontend
├── docker-compose.yml
└── README.md
```

## Prerequisites
- Docker + Docker Compose

## Setup with Docker
1. Create `.env` in `library-management/` (API key required):
   ```env
   API_KEY=your-secret-api-key
   ```

2. Start all services:
   ```bash
   cd library-management && docker-compose up --build
   ```

3. Endpoints:
- Backend: http://localhost:3001
- Frontend: http://localhost:3000

## API authentication
All backend endpoints require:
- Header: `x-api-key: <your-api-key>`

If missing/invalid, backend returns **401 Unauthorized**.

## REST APIs
### Members
- `POST /members` : create member
- `GET /members` : list members
- `GET /members/:id` : get member
- `PUT /members/:id` : update member

### Books
- `POST /books`
- `GET /books`
- `GET /books/:id`
- `PUT /books/:id`

### Issuances
- `POST /issuances`
- `GET /issuances`
- `GET /issuances/:id`
- `PUT /issuances/:id`

## Analytics / SQL query endpoints
1. **Books never borrowed**
- `GET /analytics/books-never-borrowed`

2. **Outstanding books** (issuances where `targetReturnDate >= CURRENT_DATE`)
- `GET /analytics/outstanding-books`

3. **Top 10 most borrowed books**
- `GET /analytics/top-10-most-borrowed-books`

## Validation / running checks
- See `VALIDATION.md`

## Test screenshots placeholders
Add your screenshots here:
- `docs/screenshots/member-crud.png`
- `docs/screenshots/book-crud.png`
- `docs/screenshots/issuance-crud.png`
- `docs/screenshots/analytics.png`
- `docs/screenshots/frontend-dashboard.png`

