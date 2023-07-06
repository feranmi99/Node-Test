const userModel = require("../models/todoModel")


const todoFunction = (req, res) => {
    const form = new userModel(req.body); 
    form.save()
        .then((result) => {
            console.log(result);
            console.log("Form submitted successfully");
            res.status(200).json(result);
            res.render("dashboard")
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ error: "An error occurred" });
        });
};

const getFunction = (req, res) => {
     
        userModel.find()
        .then((result)=>{
            console.log(result);
            // res.render("signup", {status: true, userDetails:result})
            // console.log(userDetails);
        })
        .catch((err)=>{
            console.log(err);
        })
}


module.exports = { todoFunction, getFunction };