# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# create Category and Task
# Work
c = Category.create!(
  name: "Work",
  description: "work stuff activities"
)

c.tasks.create!(
  name: "meh",
  description: "...",
  category_id: c.id
)

# Social
c = Category.create!(
  name: "Social",
  description: "for mingling with other humans"
)

c.tasks.create!(
  name: "Friends",
  description: "try to make more friends",
  category_id: c.id
)

c.tasks.create!(
  name: "Family",
  description: "schedule a visit",
  category_id: c.id
)

# Movies and TV
c = Category.create!(
  name: "Movies and TV",
  description: "very long watch list"
)

c.tasks.create!(
  name: "Godfather Trilogy",
  description: "rewatch",
  category_id: c.id
)

c.tasks.create!(
  name: "Attack on Titan",
  description: "continue watching",
  category_id: c.id
)

c.tasks.create!(
  name: "My Hero Academia",
  description: "continue watching",
  category_id: c.id
)

c.tasks.create!(
  name: "Glass Onion",
  description: "watch",
  category_id: c.id
)

# Sports
c = Category.create!(
  name: "Sports",
  description: "well.. more of an e-sports category"
)

c.tasks.create!(
  name: "Mobile Legends: Bang Bang",
  description: "20 points left to MG",
  category_id: c.id
)

# Home
c = Category.create!(
  name: "Home",
  description: "chores chores chores"
)

c.tasks.create!(
  name: "Grocery",
  description: "buy eggs",
  category_id: c.id
)

# Food
c = Category.create!(
  name: "Food",
  description: "must try list"
)

c.tasks.create!(
  name: "Korean",
  description: "Bok Chicken",
  category_id: c.id
)

# Finance
c = Category.create!(
  name: "Finance",
  description: "investments, if there are any"
)

c.tasks.create!(
  name: "Money",
  description: "need more money",
  category_id: c.id
)

# Shop
c = Category.create!(
  name: "Shop",
  description: "buy list, there are many"
)

# Travel
c = Category.create!(
  name: "Travel",
  description: "soon..."
)

c.tasks.create!(
  name: "where to?",
  description: "Boracay?",
  category_id: c.id
)