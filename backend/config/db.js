const express = require("express");
const mongoose = require("mongoose");
const mongoDB = "mongodb://0.0.0.0:27017/chitchat"; // Corrected the port number

const app = express();
require('dotenv').config();

app.use(express.json());
const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://0.0.0.0:27017/chitchat", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: true,
        });

        console.log('MongoDB Connected: ${conn.connection.host}'.cyan.underline);
    }
    catch (error) {
        console.log('Error: ${error.message}'.red.bold);
        process.exit();
    }
};

module.exports = connectDB;