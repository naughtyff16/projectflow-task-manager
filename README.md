# ProjectFlow Backend

Backend API for the **ProjectFlow Task Management Application** built using **Node.js, Express, MongoDB, and JWT Authentication**.

This API allows users to:

* Register and login
* Create and manage projects
* Create and manage tasks inside projects
* Filter and paginate tasks

---

# 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Express Middleware
* REST API

---

# 📂 Folder Structure

```
backend
│
├── controllers
│   ├── auth.controller.js
│   ├── project.controller.js
│   └── task.controller.js
│
├── middleware
│   ├── auth.middleware.js
│   └── asyncHandler.js
│
├── models
│   ├── User.js
│   ├── Project.js
│   └── Task.js
│
├── routes
│   ├── auth.routes.js
│   ├── project.routes.js
│   └── task.routes.js
│
├── utils
│   └── ApiError.js
│
├── app.js
└── server.js
```

---

# ⚙️ Environment Variables

Create a `.env` file in the root:

```
PORT=8080
MONGO_URI=your_mongodb_local_connection
JWT_SECRET=your_secret_key
JWT_EXPIRE=5h
```

---

# ▶️ Run the Project

Install dependencies

```
npm install
```

Start server

```
npm run dev
```

Server will run on:

```
http://localhost:8080
```

---

# ❤️ Health Check

```
GET /health
```

Example response

```
{
 "status": "OK"
}
```

---

# 🔐 Authentication APIs

## Register

```
POST /api/auth/register
```

Body

```
{
 "name": "Karthi",
 "email": "karthi@mail.com",
 "password": "123456"
}
```

---

## Login

```
POST /api/auth/login
```

Body

```
{
 "email": "karthi@mail.com",
 "password": "123456"
}
```

Response

```
{
 "token": "JWT_TOKEN"
}
```

---

# 📁 Project APIs

Authorization Header

```
Authorization: Bearer TOKEN
```

## Create Project

```
POST /api/projects
```

Body

```
{
 "projectName": "Task Manager",
 "description": "My first project"
}
```

---

## Get Projects

```
GET /api/projects
```

---

## Update Project

```
PUT /api/projects/:id
```

---

## Delete Project

```
DELETE /api/projects/:id
```

---

# ✅ Task APIs

## Add Task

```
POST /api/tasks
```

Body

```
{
 "title": "Create Login Page",
 "description": "Build authentication UI",
 "priority": "high",
 "dueDate": "2026-03-10",
 "projectId": "PROJECT_ID"
}
```

---

## Get Tasks (Pagination + Filter)

```
GET /api/tasks/:projectId?page=1&limit=5&status=todo
```

---

## Update Task

```
PUT /api/tasks/:id
```

---

## Delete Task

```
DELETE /api/tasks/:id
```

---

# 📌 Features

✔ JWT Authentication
✔ Protected Routes
✔ Project CRUD
✔ Task CRUD
✔ Pagination
✔ Status Filtering
✔ Error Handling Middleware

---

# 📬 API Base URL

```
http://127.0.0.1:8080/api
```

---

# 👨‍💻 Author

Karthi Keyan



-------------------------------------------------------------------------------------------------------------------------------------------------------------------



# ProjectFlow Frontend

Frontend for the **ProjectFlow Task Management Application** built using **React, React Router, Axios, Context Api and TailwindCSS**.

Users can:

* Register / Login
* Create projects
* Manage tasks
* Filter tasks
* Paginate tasks

---

# 🚀 Tech Stack

* React
* React Router
* Axios
* Context Api
* TailwindCSS
* React Hot Toast

---

# 📂 Folder Structure

```
frontend
│
├── src
│   ├── api
│   │   ├── axios.js
│   │   ├── authApi.js
│   │   ├── projectApi.js
│   │   └── taskApi.js
│   │
│   ├── components
│   │   ├── Layout.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskFilter.jsx
│   │   └── Pagination.jsx
│   │
│   ├── context
│   │   └── AuthContext.jsx
│   │
│   ├── pages
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   └── ProjectDetails.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
```

---

# ⚙️ Setup

Install dependencies

```
npm install
```

Run project

```
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

# 🔑 Authentication Flow

1. User logs in
2. Backend returns JWT
3. Token stored in `localStorage`
4. Axios sends token automatically using interceptor

Header

```
Authorization: Bearer TOKEN
```

---

# 📌 Features

✔ JWT Authentication
✔ Protected Routes
✔ Project Dashboard
✔ Task Management
✔ Status Filter
✔ Pagination
✔ Toast Notifications

---

# 🌐 Backend API

```
http://127.0.0.1:8080/api
```

## Postman Collection

Import the collection to test APIs.

Location:
postman/ProjectFlow.postman_collection.json

---

# 👨‍💻 Author

Karthi Keyan
