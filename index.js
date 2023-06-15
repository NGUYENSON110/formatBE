const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();


const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }),
        console.log("Mongoose connected")
    } catch (error) {
        console.log("error", error)
    }
}


connectDB();

// 
app.get("/", (req, res) => res.send("Hello World"));




// 


const PORT = 3000;
app.listen(PORT, () =>{
    console.log("Server is running....")
})