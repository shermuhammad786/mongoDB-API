// mbc , rounting 

import express from 'express';
import authRoues from './routes/authRoutes.js';
import dbConnection from './utils/config.js';
import dotenv from 'dotenv'
import cors from 'cors'

const app = express();
app.use(cors())
dotenv.config()
app.use(express.json())

dbConnection()
// <<<<<<< HEAD

// app.get("/", (req, res) => {
//     res.send("hellow world")
// })
// =======
app.use("/auth", authRoues)
// >>>>>>> 4851c22ba8712bf7dff5a79bded7d80281d4a5c2


const PORT = process.env.PORT || 5000

app.listen(process.env.PORT, () => {
    console.log(`Server is started at PORT ${process.env.PORT}`)
})