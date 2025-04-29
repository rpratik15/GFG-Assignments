const express = require("express");
const mongoose = require("mongoose");
const app = express();
const personModel = require("./Model/userModel")
const personRoute = require("./Route/route")

app.use(express.json())


mongoose.connect("mongodb://localhost:27017/myCity")

app.listen(5000, () => {
    console.log("Starting port 5000");

})


app.get("/", (req, res) => {
    console.log("In all route");
    // res.send("Home")
    personModel.find().then(data => res.json(data))
})


app.post("/add", (req, res) => {
    const { name, age, email } = req.body;
    const newData = new personModel({ name, age, email })
    newData.save().then(data => res.json())
})



