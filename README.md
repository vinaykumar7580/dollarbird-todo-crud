# Todo CRUD App

Developed Todo CRUD (Create, Read, Update, Delete) application using Node.js, Express, and MongoDB. The application consists of two main models: `UserModel` for user registration and login, and `TodoModel` for managing todos. The API provides endpoints for user registration, user login, adding todos, retrieving todos, updating todos, and deleting todos.

## Models:

1. **UserModel:**
    - Schema Fields:
        - `name`: User's name.
        - `age`: User's age.
        - `email`: User's email address.
        - `password`: User's password.

2. **TodoModel:**
    - Schema Fields:
        - `title`: Title of the todo.
        - `description`: Description of the todo.
        - `status`: Current status of the todo.

## API Design:

### User Routes:

- **User Registration:**
    - Endpoint: `POST` [https://todo-crud-qgy2.onrender.com/user/register](https://todo-crud-qgy2.onrender.com/user/register)

- **User Login:**
    - Endpoint: `POST` [https://todo-crud-qgy2.onrender.com/user/login](https://todo-crud-qgy2.onrender.com/user/login)

### Todo Routes:

- **Add Todo:**
    - Endpoint: `POST` [https://todo-crud-qgy2.onrender.com/todos/add-todo](https://todo-crud-qgy2.onrender.com/todos/add-todo)

- **Get Todos:**
    - Endpoint: `GET` [https://todo-crud-qgy2.onrender.com/todos/get-todo](https://todo-crud-qgy2.onrender.com/todos/get-todo)

- **Update Todo:**
    - Endpoint: `PUT` [https://todo-crud-qgy2.onrender.com/todos/update-todo/:id](https://todo-crud-qgy2.onrender.com/todos/update-todo/:id)

- **Delete Todo:**
    - Endpoint: `DELETE` [https://todo-crud-qgy2.onrender.com/todos/delete-todo/:id](https://todo-crud-qgy2.onrender.com/todos/delete-todo/:id)

## Relationships:

There is a one-to-many relationship implemented using userId.

## Database:

MongoDB is chosen as the database due to its flexibility with JSON-like documents and scalability. The models are structured to match MongoDB's document-oriented nature.

## Security:

- Hash and salt passwords before storing them in the database.
- Implement JWT (JSON Web Tokens) for secure user authentication.

## Error Handling:

- Use HTTP status codes to indicate the success or failure of an API request.
- Provide meaningful error messages in the API responses.
