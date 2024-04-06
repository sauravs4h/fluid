Sure! Here's a more structured documentation for the provided APIs:

---

## Task Management System API Documentation

### Overview

Our project is a Task Management System built using Node.js, Express.js, and MongoDB. It provides a RESTful API that allows users to perform CRUD operations (Create, Read, Update, Delete) on tasks. The project emphasizes clean, well-structured, and maintainable code, with proper validation and error handling for incoming data. Basic authentication is implemented using JSON Web Tokens (JWT) to ensure secure access to the API endpoints. Overall, the project aims to demonstrate proficiency in building a real-world application using Node.js, Express.js, and MongoDB.

### base api
http://localhost:8080/

### Endpoints

#### User Signup

- **Method:** POST
- **Endpoint:** `/user/signup`
- **Description:** Sign up to create a new user account.
- **Request Body:**
  ```json
  {
      "firstName": "saurav",
      "lastName": "sharma",
      "userName": "sauravs4h",
      "email": "gauravs4h@gmail.com",
      "mobile_no": "7340165574",
      "password": "gaurav@05"
  }
  ```

#### User Login

- **Method:** POST
- **Endpoint:** `/user/login`
- **Description:** Log in with your email and password to access the API endpoints.
- **Request Body:**
  ```json
  {
      "email": "gauravs4h@gmail.com",
      "password": "gaurav@05"
  }
  ```

#### Create New Task

- **Method:** POST
- **Endpoint:** `/task/newTask`
- **Description:** Create a new task.
- **Request Headers:** Authorization (Bearer token obtained after login)
- **Request Body:**
  ```json
  {
      "title": "React101",
      "description": "learn React",
      "dueDate": "2024-04-08",
      "priority": "high",
      "status": "pending"
  }
  ```

#### Get All Tasks

- **Method:** GET
- **Endpoint:** `/task/allTask`
- **Description:** Retrieve all tasks.
- **Request Headers:** Authorization (Bearer token obtained after login)

#### Get One Task by ID

- **Method:** GET
- **Endpoint:** `/task/getTask/:taskId`
- **Description:** Retrieve a single task by its ID.
- **Request Headers:** Authorization (Bearer token obtained after login)

#### Update Task Status

- **Method:** PATCH
- **Endpoint:** `/task/updateTask`
- **Description:** Update the status of an existing task.
- **Request Headers:** Authorization (Bearer token obtained after login)
- **Request Body:**
  ```json
  {
      "taskId": "66119beb652a81f160e95a59",
      "status": "completed"
  }
  ```

#### Delete Task

- **Method:** DELETE
- **Endpoint:** `/task/deleteTask`
- **Description:** Delete a task by its ID.
- **Request Headers:** Authorization (Bearer token obtained after login)
- **Request Body:**
  ```json
  {
      "taskId":"66119c3d6995c16362cfad9b"
  }
  ```

---

