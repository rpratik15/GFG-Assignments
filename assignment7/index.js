const express=require("express");
const  mongoose  = require("mongoose");
const app=express();
const personRoute=require("./Route/route")
app.use(express.json())
app.use("/", personRoute)

mongoose.connect("mongodb://localhost:27017//test")
app.listen(5000,()=>{
    console.log("Starting port 5000");

})



