const express=require("express")
const mongoose=require("mongoose")
const PORT=3005

const app=express()
app.use(express.json())

app.listen(PORT,()=>{
    console.log(`Server Started on Port ${PORT}`);
})

mongoose.connect("mongodb://127.0.0.1:27017//folks")
.then(data=>console.log(data)).catch(err=>console.log(err))

const 
app.get("/",(req,res)=>{
    res.send("Home")
})
