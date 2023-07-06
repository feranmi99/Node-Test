const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs");

let URI = process.env.MONGO_URI
let port = process.env.PORT

const router = require('./routers')
app.use('/', router);

mongoose.connect(URI)
.then(()=>{
    console.log("mongoose has connected successfully");
})
.catch((err)=>{
    console.log(err);
})

app.get("/",(req,res)=>{
    res.render("signup")
})


app.listen(port, ()=>{
    console.log(`Lift off! server has started ${port}`);
})
