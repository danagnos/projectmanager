# Project Management App 🗂️

A small full‑stack app for managing your projects. Each user signs in and sees only their own list. Built as my Coding Factory final project.

## Tech Stack

* **Frontend:** Angular (standalone components), Bootstrap 5
* **Backend:** Node.js, Express
* **Database:** MongoDB (Mongoose)
* **Auth:** JWT, BCrypt

## Features

### Authentication

* Login with email and password (hashed)
* JWT stored in the browser
* Auth‑guarded routes in Angular

### Project CRUD

* Create, view, edit (inline), delete
* Each project belongs to the logged‑in user
* Real‑time feel with instant UI updates

### Frontend

* Angular SPA with standalone components
* Responsive Bootstrap UI
* Simple navigation; role‑aware views

### Backend

* REST API with Express + Mongoose
* Token verification middleware (`auth.middleware.js`)
* Validation and error handling

## Access Control

Only the owner of a project can see, update, or delete it. Ownership is checked on every request.

## Getting Started

### 1) Backend

```bash
cd backend
npm install
cp .env.example .env   # set JWT_SECRET and MongoDB URI
npm run dev
```

### 2) Frontend

```bash
cd frontend
npm install
ng serve
```

## Testing

Use Postman for the API and your browser for the UI. Common errors (wrong login, empty title, invalid id) return clear messages.

## Folder Structure

```
backend/
  controllers/
  models/
  routes/
  middleware/
frontend/
  app/
    components/
    services/
    guards/
```

## Author

Created by **Dimitris Anagnostopoulos**

Coding Factory – Final Full‑Stack Project
