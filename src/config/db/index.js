const mongoose = require('mongoose')

DB_URL =
   'mongodb+srv://admin:UW55U0vWesD9xwDq@cluster0.y3jw8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

async function connect() {
   try {
      await mongoose.connect('mongodb://localhost:27017/mern_app')
      console.log('Connect Database Success')
   } catch (error) {
      console.log('Connect Database Fail')
   }
}

module.exports = { connect }
