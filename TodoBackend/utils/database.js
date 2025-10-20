const mongoose = require('mongoose')

const mongoURL = "mongodb://127.0.0.1:27017/FSTodo";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURL)
        .then(()=>{console.log("Connected to MongoDB")})
    } catch (error) {
        console.log("Couldn't connect to Mongodb "+error.message)
    }
}

module.exports = {connectDB}