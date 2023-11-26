# User Vacation Management System

This project is a simple user vacation management system built with Fastify, a fast and low overhead web framework for Node.js. The system allows users to perform CRUD operations on user data and vacation requests. Below is a detailed guide on how to set up and run the project.


## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Controllers](#controllers)
- [Middlewares](#middlewares)
- [Contributing](#contributing)
- [License](#license)

## Features

- CRUD operations for user data.
- Vacation request management.
- Fastify server with CORS support.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- npm (Node Package Manager) installed
- Git installed

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository```

2. Navigate to the project directory:

```bash
cd user-vacation-management-system```

```bash
npm install```

## Project Structure

- server.js: Main entry point for the Fastify application.
- routes/: Contains route definitions for different parts of the application.
- controllers/: Implements the business logic for handling requests.
- models/: Defines the data models for users and vacations.
- middlewares/: Contains validation middlewares for request payloads.
- src/: Source code for the project.

## Usage

```bash
npm start```

This will start the Fastify server, and you can access the API at http://localhost:3333.

## API Endpoints

- GET /api/users: Get all users.

- GET /api/users/:id: Get a user by ID.

- POST /api/users: Add a new user.

- PUT /api/users/:id: Update a user by ID.

- DELETE /api/users/:id: Delete a user by ID.

- GET /api/vacations: Get all vacations.

- GET /api/vacations/:id: Get a vacation by ID.

- POST /api/vacations: Request a new vacation.

- PUT /api/vacations/:id: Update a vacation by ID.

- DELETE /api/vacations/:id: Cancel a vacation by ID.

- POST /api/login: User login

## Models

- UserModel: Manages user data, including CRUD operations and authentication.
- VacationModel: Manages vacation data, including CRUD operations.

## Controllers

- userController: Implements user-related business logic (get all users, get user by ID, add user, update user, delete user, login).
- vacationController: Implements vacation-related business logic (get all vacations, get vacation by ID, request vacation, update vacation, cancel vacation).

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.


