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


app.post("/delete",(req,res)=>{
    userModel.deleteOne({email:req.body.email})
    .then((result)=>{
        res.redirect("/getPost")
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.post("/edit",(req,res)=>{
    console.log(req.body);
    userModel.findOne({email:req.body.email})
    .then((result)=>{
        if(result) {
            res.render("editusers", {info: result})
            console.log(result);
        }
    })
})

app.post("/update", (req,res)=>{
    console.log(req.body);
    userModel.updateOne({email:req.body.email},req.body)
    .then((result)=>{
        console.log(result);
        res.redirect("/getPost")
    })
    
})

app.listen(port, ()=>{
    console.log(`Lift off! server has started ${port}`);
})
