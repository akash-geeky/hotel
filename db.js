// const mongoose = require('mongoose')


// // define the mongodb connection URL
// const mongoURL = 'mongodb://localhost:27017/hotel'
// // replace my database with my data base

// mongoose.connect(mongoURL,{
//     useNewUrlparser: true, // setting new host 
//     useUnifiedTopology: true // these are the required

// })

// // get the default connection
// // mongoose maintain a default connection object representing the mongodb connection

// const db = mongoose.connection;
// // event lister will tell use the state of database such as connected , disconnected , error

// db.on('connected', () =>{
//     console.log('connected to mongodb server');
    
// });

// db.on('error', () =>{
//     console.log('mongodb connection error');
    
// });

// db.on('disconnected', () =>{
//     console.log('disconnected to mongodb server');
    
// });
// // db sb sun rha hai

// module.exports = db;


const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotel';

// Connect to MongoDB
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Set up event listeners
db.on('connected', () => {
  console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB server');
});

module.exports = db;
