const express=require("express")
const mongoose=require("mongoose")
const student=require("./Model/model")
const PORT=3000

const app=express()
app.use(express.json())
mongoose.connect("mongodb://0.0.0.0:27017/folks")
app.listen(PORT,()=>{
    console.log(`Server Started on Port ${PORT}`);
})


//.then(data=>console.log(data)).catch(err=>console.log(err))

app.get("/",(req,res)=>{
    res.send("Home")
    // console.log(await student.find().then(data=>res.json(data)));

    student.find().then(data => res.json(data))
})

app.post("/add",(req,res)=>{
    const {name,age,email}=req.body;
    const newData=new student
})
