const mongoose = require('mongoose')
require('dotenv').config();



const connectionString = process.env.mongodb_uri;

const connectDB = async () => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to the database");
    } catch (err) {
        console.log("Database connection failed:", err);
        process.exit(1);  // Exit the app if connection fails
    }
};

module.exports = connectDB;