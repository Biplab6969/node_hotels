const mongoose = require('mongoose');
//define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017'  //replace 'mydatabase' with your database

//setup MongoDB connedction
mongoose.connect(mongoURL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//get the defult connection
//Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

//Define event Listeners for databases connection

db.on('connected', () => {
  console.log('Connected to mongodb server');
});

db.on('error', (err) => {
  console.log('Mongodb connection error:', err);
});

db.on('disconnected', () => {
  console.log('MOngoDB disconnected');
});

//export the database connection
module.exports = db;