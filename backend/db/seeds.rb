# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create(({ name: 'Star Wars' }, { name: 'Lord of the Rings' }))
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Trip.destroy_all

user1 = User.create(name: "Jess", email: "jssdnvn@gmail.com", password: "123")
user2 = User.create(name: "Bill", email: "bill@gmail.com", password: "1234")


trip1 = user1.trips.create(title: "Eastern Europe", date: "May-June", season: "", people: "alone", completed: "no" )
trip2 = user1.trips.create(title: "West Africa", date: "none", season: "winter", people: "ash team", completed: "no" )
trip3 = user2.trips.create(title: "DMV", date: "September", season: "", people: "alone", completed: "no")
trip4 = user2.trips.create(title: "South East Asia", date: "none", season: "", people: "Laynee", completed: "no")

des1 = trip1.destination.create(city: "Sofia", country: "Bulgaria", length: 4, activities: "", language: "Bulgarian", currency: "Lev")
des2 = trip1.destination.create(city: "Bucharest", country: "Romania", length: 3, activities: "", language: "Romanian", currency: "Leu")
des3 = trip2.destination.create(city: "Accra", country: "Ghana", length: 4, activities: "", language: "English and Akan", currency: "Cedi")
des4 = trip3.destination.create(city: "Washington DC", country: "USA", length: 2, activities: "visit monuments", language: "English", currency: "USD")
des5 = trip4.destination.create(city: "Bangkok", country: "Tailand", length: 3, activities: "", language: "Thai", currency: "Baht")
