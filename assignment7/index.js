const express=require("express");
const app=express();
app.use(express.json())
console.log("Starting")
app.listen(5000,()=>{
    console.log("Starting port 5000");
})


