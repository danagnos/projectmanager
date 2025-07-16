# Project Management App 🗂️

A full-stack project for managing projects. Developed as the final assignment for Coding Factory.

## 🔧 Tech Stack

- **Frontend:** Angular (Standalone components), Bootstrap 5
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Authentication:** JWT (Token-based), BCrypt

## 📦 Features

### ✅ Authentication
- Secure Login with hashed passwords
- JWT token issued and stored in browser
- AuthGuard-protected routes (Angular)

### ✅ Project CRUD
- Create, View, Update, Delete Projects
- Each project is linked to the logged-in user
- Inline editing and real-time updates

### ✅ Frontend
- Angular SPA using standalone components
- Bootstrap UI (responsive)
- Protected routes, navigation with role-based view
- LocalStorage for token management

### ✅ Backend
- RESTful API with full CRUD support
- Express routing + Mongoose models
- Token verification middleware (`auth.middleware.js`)
- Validation and error handling

## 🔐 Access Control

All project data is tied to the authenticated user. Only the owner can access, update, or delete their projects.

## 🚀 Getting Started

### 1. Backend
```bash
cd backend
npm install
cp .env   # Add JWT_SECRET and Mongo URI
npm run dev
```

### 2. Frontend
```bash
cd frontend
npm install
ng serve
```

## 🧪 Testing

Tested with Postman (backend) and browser (frontend). Errors and edge cases handled (e.g., invalid login, empty project title, etc.)

## 📁 Folder Structure

```
backend/
  └── controllers/
  └── models/
  └── routes/
  └── middleware/
frontend/
  └── app/
      └── components/
      └── services/
      └── guards/
```

## 👨‍🎓 Project Author

Created by **Dimitris Anagnostopoulos**  
Coding Factory – Final Full-Stack Project