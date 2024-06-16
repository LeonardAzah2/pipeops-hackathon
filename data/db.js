const mongoose = require('mongoose')
require('dotenv').config()
const MONGODB_URL = process.env.MONGODB_URL


function connectToMongoDB() {
    mongoose.connect(MONGODB_URL)


    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB successfully')
    })

    mongoose.connection.on('error', (err) => {
        console.log(`Error connecting to MongoDB ${err.message}`)
    });
}

module.exports = { connectToMongoDB }