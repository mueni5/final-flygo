# README

# Flygo

Welcome to Flygo Web Application, a lightweight and efficient flight booking system.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Relationships](#relationships)
- [Endpoints](#endpoints)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Flygo2 is a flight booking system designed to simplify the process of booking flights and managing reservations. It provides a user-friendly interface and offers various features to enhance the booking experience.

## Features

- Search and filter flights based on departure, destination, date, and other parameters.
- View detailed flight information, including pricing, available seats, and amenities.
- Reserve seats and complete the booking process securely.
- Manage existing reservations, including cancellation and modification.
- User authentication and account management functionality.

## Table Relationships - Airport, Booking, Flight, Review, User
    The application has five main tables: Airport, Booking, Flight, Review, and User. These tables represent different entities and have specific relationships with each other.

Airport Table

    The Airport table represents airports and has the following relationships:

    has_many :reviews: An airport can have multiple reviews written by users.

    has_many :flights: An airport can have multiple flights departing from or arriving at it.

Booking Table

    The Booking table represents flight bookings made by users and has the following relationships:

    belongs_to :user: A booking belongs to a user who made the reservation.

    belongs_to :flight: A booking is associated with a specific flight.

Flight Table

  The Flight table represents individual flights and has the following relationships:

   belongs_to :airport: A flight belongs to an airport, either as a departure or arrival location.

   has_many :bookings: A flight can have multiple bookings made by different users.

Review Table

  The Review table represents reviews written by users for airports and has the following relationships:

  belongs_to :user: A review is written by a user.

  belongs_to :airport: A review is associated with a specific airport.

User Table

 The User table represents users of the application and has the following relationships:

 has_many :reviews: A user can write multiple reviews for different airports.

 has_many :bookings: A user can make multiple flight bookings.

 has_many :flights, through: :bookings.

 has_secure_password: The user's password is securely stored and authenticated.

Additional validations are also applied to the User model to ensure data integrity and completeness.

## Endpoints
Index user flights:

  GET /user_flights
  GET /users/:user_id/flights

Show user flight:

  GET /user_flights/:flight_id
  GET /users/:user_id/flights/:flight_id

Index airport flights:

  GET /airport_flights
  GET /airports/:airport_id/flights

Index user reviews:

  GET /user_reviews
  GET /users/:user_id/reviews
  POST /signup - Create a new user.

Current user:

  GET /me - Retrieve information about the current user.
  POST /login - Authenticate and log in a user.
  DELETE /logout - Log out the current user.

## Installation

To install and run Flygo2 locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/mshekerotokiti/flygo2.git
   ```

2. Navigate to the project directory:

   ```shell
   cd flygo2
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Configure the application by editing the configuration file `config.js`.

5. Start the server:

   ```shell
   npm start
   ```

6. Access the application in your browser at `http://localhost:3000`.

## Usage

After installing Flygo2, you can start using it by following these steps:

1. Register for an account or log in if you already have one.

2. Use the search functionality to find flights that match your criteria.

3. Select a flight from the search results and proceed with the booking process.

4. Provide the necessary details and payment information to complete the reservation.

5. Access your account to view and manage your reservations.

## Contributing

Flygo2 is an open-source project, and we welcome contributions from the community. The original authors of this repository are:

- [Amos Wanene](https://github.com/gich2009)
- [Ann Wangui](https://github.com/annwairimu)
- [William Arasirwa](https://github.com/Arasirwa)
- [Bonface Nyatangi](https://github.com/bonfacenyatangi)
- [Sharon Tokiti](https://github.com/mshekerotokiti)
- [Christine Mbuvi](https://github.com/mueni5)

If you'd like to contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch:

   ```shell
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```shell
   git commit -m "Add your commit message here"
   ```

4. Push your changes to your forked repository:

   ```shell
   git push origin feature/your-feature-name
   ```

5. Open a pull request, describing your changes and why they should be merged.

Please ensure that you follow the existing code style, write appropriate tests, and provide any necessary documentation for your contributions.

## License

This project is licensed under the [MIT License](LICENSE).