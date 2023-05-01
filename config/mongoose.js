const mongoose = require('mongoose');
const url = 'mongodb+srv://shawatul4:VJd1UKI70m8MHR5U@issurtracker.72saofu.mongodb.net/?retryWrites=true&w=majority';
// mongoose.connect('url') 
mongoose.connect(url);
const db = mongoose.connection;

//If any Error then Getting this Line
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', () => {
    console.log("Connected to Database :: MongoDB ")
});

module.exports = db;  //Exports db