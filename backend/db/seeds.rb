# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Trip.destroy_all

user1 = User.create[name: "Jess", email: "jssdnvn@gmail.com", password: "123"]
user2 = User.create[name: "Bill", email: "bill@gmail.com", password: "1234"]


trip1 = user1.trip.create[title: "Eastern Europe", date: "May-June", season: "", people: ]
trip2 = user1.trip.create[title: "West Africa", ]
trip3 = user2.trip.create[title: "DMV Adventure"]
trip4 = user2.trip.create[title: "South East Asia"]