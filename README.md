# Car Inventory Management System

This project is a car inventory management system built with NestJS and Prisma. It allows users to perform CRUD operations on a database of cars, including adding new cars, updating existing ones, and deleting cars.

## Features
- View a list of all cars in the inventory
- Add a new car to the inventory
- Update details of an existing car
- Delete a car from the inventory


## Run the application using Docker Compose:
   - Ensure Docker is installed on your machine
   - Navigate to the project directory in your terminal
   - Run the following command: `docker-compose up` 

## Installation
1. Clone the repository
2. Install dependencies using `npm install`
3. Set up the database connection in the `.env` file
4. Run the application using `npm start`




## Usage
- To view all cars: Send a GET request to `http://localhost:3000/cars`
- To add a new car: Send a POST request to `http://localhost:3000/cars` with the car details in the request body
- To update a car: Send a PATCH request to `http://localhost:3000/cars/{carId}` with the updated car details in the request body
- To delete a car: Send a DELETE request to `http://localhost:3000/cars/{carId}`

## Technologies Used
- NestJS
- Prisma
- Swagger (for API documentation)
- Jest


