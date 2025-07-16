# 🗂️ Project Manager App

This is a **full-stack Project Management application** developed as a final project for the Coding Factory.  
It supports **JWT authentication**, **MongoDB-based CRUD operations**, and a fully responsive **Angular frontend** with Bootstrap.

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express
- MongoDB + Mongoose
- JWT Authentication
- Winston Logger
- Dotenv for environment configs

### Frontend
- Angular (Standalone Components)
- Bootstrap 5
- Angular Router
- LocalStorage for token storage

---

## 🔐 Features

- ✅ User login with JWT token
- ✅ Protected routes (`/projects`) using Angular AuthGuard
- ✅ Create, Read, Update, Delete Projects
- ✅ Responsive UI with Bootstrap
- ✅ Role-based Navbar (Login/Register for guests, Projects/Logout for authenticated)
- ✅ Form validation and real-time updates

---

## 📁 Folder Structure

### Backend

```
projectmanager/
│
├── config/
│   └── db.js
├── controllers/
│   └── project.controller.js
├── middlewares/
│   └── auth.middleware.js
├── models/
│   └── project.model.js
├── routes/
│   └── project.routes.js
├── services/
│   └── project.service.js
├── logs/
│   └── combined.log
├── .env
├── server.js
```

### Frontend

```
projectmanager-frontend/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── projects/
│   │   ├── services/
│   │   ├── guards/
│   │   └── auth/
│   ├── assets/
│   ├── index.html
│   └── main.ts
├── angular.json
```

---

## 🚀 Getting Started

### 🧩 Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd projectmanager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/projectdb
   JWT_SECRET=your_jwt_secret
   ```

4. Run server:
   ```bash
   npm run dev
   ```

---

### 💻 Frontend Setup

1. Navigate to frontend folder:
   ```bash
   cd projectmanager-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the Angular app:
   ```bash
   ng serve
   ```

4. Visit `http://localhost:4200`

---

## 📌 Notes

- The `/projects` route is protected — login is required.
- JWT is stored in browser localStorage.
- Invalid or expired tokens will redirect to login automatically.
- Code uses TypeScript best practices and Angular standalone components.

---

## 📅 Final Submission

- Author: Dimitris Anagnostopoulos
- Submitted for: Coding Factory Final Project
- Date: 2025-07-16

---

## ✅ Status

> All features complete and tested successfully ✔️  
> Ready for GitHub deployment and final grading.

