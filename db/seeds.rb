# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# db/seeds.rb


# airport1 = Airport.create!(name: 'Los Angeles International Airport', address: '1 World Way, Los Angeles, CA 90045', contact: '18002465211', rating: 4.1)
# airport2 = Airport.create!(name: 'John F. Kennedy International Airport', address: 'Queens, NY 11430', contact: '17182444444', rating: 3.9)
# airport3 = Airport.create!(name: 'Heathrow Airport', address: 'Longford, Hounslow TW6, UK', contact: '+44 844 335 1801', rating: 4.5)
# airport4 = Airport.create!(name: 'Dubai International Airport', address: 'Dubai - United Arab Emirates', contact: '+971 4 224 5555', rating: 4.3)

# # Create some users
# user1 = User.create!(first_name: 'John', last_name: 'Doe', username: 'johndoe', email: 'johndoe@gmail.com', password: 'johndoe123')
# user2 = User.create!(first_name: 'Jane', last_name: 'Doe', username: 'janedoe', email: 'janedoe@gmail.com', password: 'janedoe123')
# user3 = User.create!(first_name: 'Alice', last_name: 'Smith', username: 'alicesmith', email: 'alicesmith@gmail.com', password: 'alicesmith123')

# # Create some flights
# flight1 = Flight.create!(origin: 'Los Angeles', destination: 'New York', date: DateTime.new(2023, 8, 29), departureTime: DateTime.new(2023, 8, 29, 9, 30), arrivalTime: DateTime.new(2023, 8, 29, 18, 00), flight_class: 'Economy', airport: airport1)
# flight2 = Flight.create!(origin: 'New York', destination: 'Los Angeles', date: DateTime.new(2023, 8, 30), departureTime: DateTime.new(2023, 8, 30, 9, 30), arrivalTime: DateTime.new(2023, 8, 30, 18, 00), flight_class: 'Economy', airport: airport2)
# flight3 = Flight.create!(origin: 'London', destination: 'New York', date: DateTime.new(2023, 9, 1), departureTime: DateTime.new(2023, 9, 1, 11, 00), arrivalTime: DateTime.new(2023, 9, 1, 19, 30), flight_class: 'Business', airport: airport3)
# flight4 = Flight.create!(origin: 'Dubai', destination: 'London', date: DateTime.new(2023, 9, 5), departureTime: DateTime.new(2023, 9, 5, 13, 30), arrivalTime: DateTime.new(2023, 9, 5, 19, 45), flight_class: 'First Class', airport: airport4)

# # Create some bookings
# booking1 = Booking.create!(user: user1, flight: flight1)
# booking2 = Booking.create!(user: user2, flight: flight2)
# booking3 = Booking.create!(user: user3, flight: flight3)
# booking4 = Booking.create!(user: user1, flight: flight4)

# # Create some reviews
# review1 = Review.create!(review: 'Great flight!', rating: 4.5, user: user1, airport: airport1)
# review2 = Review.create!(review: 'Amazing service!', rating: 4.8, user: user2, airport: airport2)
# review3 = Review.create!(review: 'Comfortable journey.', rating: 4.2, user: user3, airport: airport3)
# review4 = Review.create!(review: 'Excellent facilities!', rating: 4.7, user: user1, airport: airport4)





# db/seeds.rb
# airport1 = Airport.create!(name: 'Los Angeles International Airport', address: '1 World Way, Los Angeles, CA 90045', contact: '18002465211', rating: 4.1)
# airport2 = Airport.create!(name: 'John F. Kennedy International Airport', address: 'Queens, NY 11430', contact: '17182444444', rating: 3.9)
# airport3 = Airport.create!(name: 'Heathrow Airport', address: 'Longford, Hounslow TW6, UK', contact: '+44 844 335 1801', rating: 4.5)
# airport4 = Airport.create!(name: 'Dubai International Airport', address: 'Dubai - United Arab Emirates', contact: '+971 4 224 5555', rating: 4.3)
# airport5 = Airport.create!(name: 'Jomo Kenyatta International Airport', address: 'Embakasi, Nairobi, Kenya', contact: '+254 20 8271000', rating: 4.4)
# airport6 = Airport.create!(name: 'Wilson Airport', address: 'Langata Road, Nairobi, Kenya', contact: '+254 20 600000', rating: 4.2)
# airport7 = Airport.create!(name: 'Eldoret International Airport', address: 'Eldoret, Kenya', contact: '+254 532 063 000', rating: 4.0)
# airport8 = Airport.create!(name: 'Moi International Airport', address: 'Mombasa, Kenya', contact: '+254 41 343 1111', rating: 4.1)

# # Create some users
# user1 = User.create!(first_name: 'John', last_name: 'Doe', username: 'johndoe', email: 'johndoe@gmail.com', password: 'johndoe123')
# user2 = User.create!(first_name: 'Jane', last_name: 'Doe', username: 'janedoe', email: 'janedoe@gmail.com', password: 'janedoe123')
# user3 = User.create!(first_name: 'Alice', last_name: 'Smith', username: 'alicesmith', email: 'alicesmith@gmail.com', password: 'alicesmith123')
# user4 = User.create!(first_name: 'Christine', last_name: 'Mbuvi', username: 'christinem', email: 'christinem@gmail.com', password: 'christinem123')
# user5 = User.create!(first_name: 'Ann', last_name: 'Wangui', username: 'annw', email: 'annw@gmail.com', password: 'annw123')
# user6 = User.create!(first_name: 'Sharon', last_name: 'Tokiti', username: 'sharont', email: 'sharont@gmail.com', password: 'sharont123')
# user7 = User.create!(first_name: 'Bonface', last_name: 'Mabeche', username: 'bonfacem', email: 'bonfacem@gmail.com', password: 'bonfacem123')
# user8 = User.create!(first_name: 'William', last_name: 'Arasirwa', username: 'williama', email: 'williama@gmail.com', password: 'williama123')
# user9 = User.create!(first_name: 'Amos', last_name: 'Munini', username: 'amosm', email: 'amosm@gmail.com', password: 'amosm123')

# # Create some flights
# flight1 = Flight.create!(origin: 'Los Angeles', destination: 'New York', date: DateTime.new(2023, 8, 29), departureTime: DateTime.new(2023, 8, 29, 9, 30), arrivalTime: DateTime.new(2023, 8, 29, 18, 00), flight_class: 'Economy', airport: airport1)
# flight2 = Flight.create!(origin: 'New York', destination: 'Los Angeles', date: DateTime.new(2023, 8, 30), departureTime: DateTime.new(2023, 8, 30, 9, 30), arrivalTime: DateTime.new(2023, 8, 30, 18, 00), flight_class: 'Economy', airport: airport2)
# flight3 = Flight.create!(origin: 'London', destination: 'New York', date: DateTime.new(2023, 9, 1), departureTime: DateTime.new(2023, 9, 1, 11, 00), arrivalTime: DateTime.new(2023, 9, 1, 19, 30), flight_class: 'Business', airport: airport3)
# flight4 = Flight.create!(origin: 'Dubai', destination: 'London', date: DateTime.new(2023, 9, 5), departureTime: DateTime.new(2023, 9, 5, 13, 30), arrivalTime: DateTime.new(2023, 9, 5, 19, 45), flight_class: 'First Class', airport: airport4)
# flight5 = Flight.create!(origin: 'Nairobi', destination: 'New York', date: DateTime.new(2023, 9, 10), departureTime: DateTime.new(2023, 9, 10, 9, 00), arrivalTime: DateTime.new(2023, 9, 10, 18, 30), flight_class: 'Economy', airport: airport5)
# flight6 = Flight.create!(origin: 'New York', destination: 'Nairobi', date: DateTime.new(2023, 9, 15), departureTime: DateTime.new(2023, 9, 15, 10, 00), arrivalTime: DateTime.new(2023, 9, 15, 20, 30), flight_class: 'Business', airport: airport5)
# flight7 = Flight.create!(origin: 'Eldoret', destination: 'London', date: DateTime.new(2023, 9, 18), departureTime: DateTime.new(2023, 9, 18, 12, 00), arrivalTime: DateTime.new(2023, 9, 18, 20, 00), flight_class: 'Economy', airport: airport7)
# flight8 = Flight.create!(origin: 'London', destination: 'Eldoret', date: DateTime.new(2023, 9, 22), departureTime: DateTime.new(2023, 9, 22, 9, 30), arrivalTime: DateTime.new(2023, 9, 22, 18, 00), flight_class: 'First Class', airport: airport7)
# flight9 = Flight.create!(origin: 'Mombasa', destination: 'Dubai', date: DateTime.new(2023, 9, 25), departureTime: DateTime.new(2023, 9, 25, 14, 00), arrivalTime: DateTime.new(2023, 9, 25, 20, 00), flight_class: 'Business', airport: airport8)
# flight10 = Flight.create!(origin: 'Dubai', destination: 'Mombasa', date: DateTime.new(2023, 9, 30), departureTime: DateTime.new(2023, 9, 30, 12, 30), arrivalTime: DateTime.new(2023, 9, 30, 18, 30), flight_class: 'Economy', airport: airport8)

# # Create some bookings
# booking1 = Booking.create!(user: user1, flight: flight1)
# booking2 = Booking.create!(user: user2, flight: flight2)
# booking3 = Booking.create!(user: user3, flight: flight3)
# booking4 = Booking.create!(user: user1, flight: flight4)
# booking5 = Booking.create!(user: user4, flight: flight5)
# booking6 = Booking.create!(user: user5, flight: flight6)
# booking7 = Booking.create!(user: user6, flight: flight7)
# booking8 = Booking.create!(user: user7, flight: flight8)
# booking9 = Booking.create!(user: user8, flight: flight9)
# booking10 = Booking.create!(user: user9, flight: flight10)

# # Create some reviews
# review1 = Review.create!(review: 'Great flight!', rating: 4.5, user: user1, airport: airport1)
# review2 = Review.create!(review: 'Amazing service!', rating: 4.8, user: user2, airport: airport2)
# review3 = Review.create!(review: 'Comfortable journey.', rating: 4.2, user: user3, airport: airport3)
# review4 = Review.create!(review: 'Excellent facilities!', rating: 4.7, user: user1, airport: airport4)





# db/seeds.rb
airport1 = Airport.create!(name: 'Jomo Kenyatta International Airport', address: 'Embakasi, Nairobi, Kenya', contact: '+254 20 8271000', rating: 4.4, image:'./AirportImages/JKIA.jpg')
airport2 = Airport.create!(name: 'Wilson Airport', address: 'Langata Road, Nairobi, Kenya', contact: '+254 20 600000', rating: 4.2, image: './AirportImages/Eldoret2.jpg')
airport3 = Airport.create!(name: 'Eldoret International Airport', address: 'Eldoret, Kenya', contact: '+254 532 063 000', rating: 4.0, image: './AirportImages/Eldoret.jpg')
airport4 = Airport.create!(name: 'Moi International Airport', address: 'Mombasa, Kenya', contact: '+254 41 343 1111', rating: 4.1, image: './AirportImages/Moi.jpg')
airport5 = Airport.create!(name: 'Los Angeles International Airport', address: '1 World Way, Los Angeles, CA 90045', contact: '+1 8002465211', rating: 4.1, image: './AirportImages/LA.jpg')
airport6 = Airport.create!(name: 'John F. Kennedy International Airport', address: 'Queens, NY 11430', contact: '+1 182444444', rating: 3.9, image: './AirportImages/JFK.jpg')
airport7 = Airport.create!(name: 'Heathrow Airport', address: 'Longford, Hounslow TW6, UK', contact: '+44 844 335 1801', rating: 4.5, image: './AirportImages/Heathrow.jpg')
airport8 = Airport.create!(name: 'Dubai International Airport', address: 'Dubai - United Arab Emirates', contact: '+971 4 224 5555', rating: 4.3, image: './AirportImages/Dubai.jpg')

# Create some users
user1 = User.create!(first_name: 'John', last_name: 'Doe', username: 'johndoe', email: 'johndoe@gmail.com', password: 'johndoe123')
user2 = User.create!(first_name: 'Jane', last_name: 'Doe', username: 'janedoe', email: 'janedoe@gmail.com', password: 'janedoe123')
user3 = User.create!(first_name: 'Alice', last_name: 'Smith', username: 'alicesmith', email: 'alicesmith@gmail.com', password: 'alicesmith123')
user4 = User.create!(first_name: 'Christine', last_name: 'Mbuvi', username: 'christinem', email: 'christinem@gmail.com', password: 'christinem123')
user5 = User.create!(first_name: 'Ann', last_name: 'Wangui', username: 'annw', email: 'annw@gmail.com', password: 'annw123')
user6 = User.create!(first_name: 'Sharon', last_name: 'Tokiti', username: 'sharont', email: 'sharont@gmail.com', password: 'sharont123')
user7 = User.create!(first_name: 'Bonface', last_name: 'Mabeche', username: 'bonfacem', email: 'bonfacem@gmail.com', password: 'bonfacem123')
user8 = User.create!(first_name: 'William', last_name: 'Arasirwa', username: 'williama', email: 'williama@gmail.com', password: 'williama123')
user9 = User.create!(first_name: 'Amos', last_name: 'Munini', username: 'amosm', email: 'amosm@gmail.com', password: 'amosm123')


# Create some flights
flight1 = Flight.create!(origin: 'Nairobi', destination: 'New York', date: DateTime.new(2023, 8, 29), departureTime: DateTime.new(2023, 8, 29, 9, 30), arrivalTime: DateTime.new(2023, 8, 29, 18, 00), flight_class: 'Economy', airport: airport5, price: 500.00)
flight2 = Flight.create!(origin: 'New York', destination: 'Nairobi', date: DateTime.new(2023, 8, 30), departureTime: DateTime.new(2023, 8, 30, 9, 30), arrivalTime: DateTime.new(2023, 8, 30, 18, 00), flight_class: 'Economy', airport: airport6, price: 600.00)
flight3 = Flight.create!(origin: 'Eldoret', destination: 'London', date: DateTime.new(2023, 9, 1), departureTime: DateTime.new(2023, 9, 1, 11, 00), arrivalTime: DateTime.new(2023, 9, 1, 19, 30), flight_class: 'Business', airport: airport7, price: 1200.00)
flight4 = Flight.create!(origin: 'London', destination: 'Eldoret', date: DateTime.new(2023, 9, 5), departureTime: DateTime.new(2023, 9, 5, 13, 30), arrivalTime: DateTime.new(2023, 9, 5, 19, 45), flight_class: 'First', airport: airport8, price: 2000.00)
flight5 = Flight.create!(origin: 'Los Angeles', destination: 'New York', date: DateTime.new(2023, 9, 10), departureTime: DateTime.new(2023, 9, 10, 9, 00), arrivalTime: DateTime.new(2023, 9, 10, 18, 30), flight_class: 'Economy', airport: airport1, price: 400.00)
flight6 = Flight.create!(origin: 'New York', destination: 'Los Angeles', date: DateTime.new(2023, 9, 15), departureTime: DateTime.new(2023, 9, 15, 10, 00), arrivalTime: DateTime.new(2023, 9, 15, 20, 30), flight_class: 'Business', airport: airport2, price: 800.00)
flight7 = Flight.create!(origin: 'Mombasa', destination: 'Dubai', date: DateTime.new(2023, 9, 18), departureTime: DateTime.new(2023, 9, 18, 12, 00), arrivalTime: DateTime.new(2023, 9, 18, 20, 00), flight_class: 'Economy', airport: airport4, price: 700.00)
flight8 = Flight.create!(origin: 'Dubai', destination: 'Mombasa', date: DateTime.new(2023, 9, 22), departureTime: DateTime.new(2023, 9, 22, 9, 30), arrivalTime: DateTime.new(2023, 9, 22, 18, 00), flight_class: 'First', airport: airport3, price: 1500.00)
flight9 = Flight.create!(origin: 'London', destination: 'New York', date: DateTime.new(2023, 9, 25), departureTime: DateTime.new(2023, 9, 25, 14, 00), arrivalTime: DateTime.new(2023, 9, 25, 20, 00), flight_class: 'Business', airport: airport7, price: 1100.00)
flight10 = Flight.create!(origin: 'Dubai', destination: 'London', date: DateTime.new(2023, 9, 30), departureTime: DateTime.new(2023, 9, 30, 12, 30), arrivalTime: DateTime.new(2023, 9, 30, 18, 30), flight_class: 'Economy', airport: airport8, price: 900.00)
flight11 = Flight.create!(origin: 'Nairobi', destination: 'Eldoret', date: DateTime.new(2023, 9, 5), departureTime: DateTime.new(2023, 9, 5, 9, 30), arrivalTime: DateTime.new(2023, 9, 5, 11, 00), flight_class: 'Economy', airport: airport1, price: 120.00)
flight12 = Flight.create!(origin: 'Eldoret', destination: 'Nairobi', date: DateTime.new(2023, 9, 6), departureTime: DateTime.new(2023, 9, 6, 9, 30), arrivalTime: DateTime.new(2023, 9, 6, 11, 00), flight_class: 'Economy', airport: airport3, price: 120.00)
flight13 = Flight.create!(origin: 'Nairobi', destination: 'Mombasa', date: DateTime.new(2023, 9, 7), departureTime: DateTime.new(2023, 9, 7, 9, 30), arrivalTime: DateTime.new(2023, 9, 7, 11, 30), flight_class: 'Economy', airport: airport1, price: 150.00)
flight14 = Flight.create!(origin: 'Mombasa', destination: 'Nairobi', date: DateTime.new(2023, 9, 8), departureTime: DateTime.new(2023, 9, 8, 9, 30), arrivalTime: DateTime.new(2023, 9, 8, 11, 30), flight_class: 'Economy', airport: airport4, price: 150.00)
flight15 = Flight.create!(origin: 'Nairobi', destination: 'Eldoret', date: DateTime.new(2023, 9, 9), departureTime: DateTime.new(2023, 9, 9, 10, 00), arrivalTime: DateTime.new(2023, 9, 9, 12, 00), flight_class: 'Business', airport: airport2, price: 200.00)
flight16 = Flight.create!(origin: 'Eldoret', destination: 'Nairobi', date: DateTime.new(2023, 9, 10), departureTime: DateTime.new(2023, 9, 10, 10, 00), arrivalTime: DateTime.new(2023, 9, 10, 12, 00), flight_class: 'Business', airport: airport3, price: 200.00)
flight17 = Flight.create!(origin: 'Mombasa', destination: 'Eldoret', date: DateTime.new(2023, 9, 11), departureTime: DateTime.new(2023, 9, 11, 10, 30), arrivalTime: DateTime.new(2023, 9, 11, 13, 00), flight_class: 'Business', airport: airport4, price: 180.00)
flight18 = Flight.create!(origin: 'Eldoret', destination: 'Mombasa', date: DateTime.new(2023, 9, 12), departureTime: DateTime.new(2023, 9, 12, 10, 30), arrivalTime: DateTime.new(2023, 9, 12, 13, 00), flight_class: 'Business', airport: airport3, price: 180.00)
flight19 = Flight.create!(origin: 'Nairobi', destination: 'Mombasa', date: DateTime.new(2023, 9, 13), departureTime: DateTime.new(2023, 9, 13, 8, 30), arrivalTime: DateTime.new(2023, 9, 13, 10, 30), flight_class: 'Economy', airport: airport2, price: 160.00)
flight20 = Flight.create!(origin: 'Mombasa', destination: 'Nairobi', date: DateTime.new(2023, 9, 14), departureTime: DateTime.new(2023, 9, 14, 8, 30), arrivalTime: DateTime.new(2023, 9, 14, 10, 30), flight_class: 'Economy', airport: airport4, price: 160.00)
flight21 = Flight.create!(origin: 'Eldoret', destination: 'Nairobi', date: DateTime.new(2023, 9, 15), departureTime: DateTime.new(2023, 9, 15, 9, 00), arrivalTime: DateTime.new(2023, 9, 15, 11, 00), flight_class: 'First', airport: airport3, price: 210.00)
flight22 = Flight.create!(origin: 'Nairobi', destination: 'Eldoret', date: DateTime.new(2023, 9, 16), departureTime: DateTime.new(2023, 9, 16, 9, 00), arrivalTime: DateTime.new(2023, 9, 16, 11, 00), flight_class: 'First', airport: airport1, price: 210.00)


# Create some bookings
booking1 = Booking.create!(user: user1, flight: flight5)
booking2 = Booking.create!(user: user2, flight: flight6)
booking3 = Booking.create!(user: user3, flight: flight7)
booking4 = Booking.create!(user: user1, flight: flight8)
booking5 = Booking.create!(user: user4, flight: flight9)
booking6 = Booking.create!(user: user5, flight: flight10)
booking7 = Booking.create!(user: user6, flight: flight1)
booking8 = Booking.create!(user: user7, flight: flight2)
booking9 = Booking.create!(user: user8, flight: flight3)
booking10 = Booking.create!(user: user9, flight: flight4)
booking11 = Booking.create!(user: user1, flight: flight11)
booking12 = Booking.create!(user: user2, flight: flight12)
booking13 = Booking.create!(user: user3, flight: flight13)
booking14 = Booking.create!(user: user4, flight: flight14)
booking15 = Booking.create!(user: user5, flight: flight15)
booking16 = Booking.create!(user: user6, flight: flight16)
booking17 = Booking.create!(user: user7, flight: flight17)
booking18 = Booking.create!(user: user8, flight: flight18)
booking19 = Booking.create!(user: user9, flight: flight19)
booking20 = Booking.create!(user: user1, flight: flight20)
booking21 = Booking.create!(user: user2, flight: flight21)
booking22 = Booking.create!(user: user3, flight: flight22)


# Create some reviews
review1 = Review.create!(review: 'Great flight!', rating: 4.5, user: user1, airport: airport5)
review2 = Review.create!(review: 'Amazing service!', rating: 4.8, user: user2, airport: airport6)
review3 = Review.create!(review: 'Comfortable journey.', rating: 4.2, user: user3, airport: airport7)
review4 = Review.create!(review: 'Excellent facilities!', rating: 4.7, user: user1, airport: airport8)


