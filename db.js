const mongoose = require('mongoose');

// mongoose.connectDB = async () => {
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://mercyapio31_db_user:ALolcuH8qEYB1Jf6@cluster0.9esnqj6.mongodb.net/")
            console.log('Your connection to db is successful');

    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;

