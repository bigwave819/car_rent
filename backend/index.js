require("dotenv").config();
const cors = require('cors');
const express = require("express");
const mongoose = require("mongoose")
const userRoutes = require('./routes/user')


// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.use("/api/user", userRoutes)


//connection to the DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected");
        app.listen(process.env.PORT, () => {
            console.log("the server is running at the port", process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err);       
    })