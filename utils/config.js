import dotenv from 'dotenv';
import mongoose from 'mongoose';
// const mongoose = require("mongoose")
// const mongoDBUrl = "mongodb+srv://sherabro141:sher786@social-media-app.waz86xo.mongodb.net/"
dotenv.config();
const dbConnection = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`mongo db is conncted: ${con.connection.host}`)
    } catch (error) {
        console.log(process.env.MONGODB_URI , "====>>>>mongo db uro")
        console.log(error)
    }
}

export default dbConnection