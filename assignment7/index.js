const express = require("express");
const mongoose = require("mongoose");
const app = express();
const personModel = require("./Model/userModel")
const personRoute = require("./Route/route")
const PORT=4000
app.use(express.json())


mongoose.connect("mongodb://0.0.0.0:27017/test")
// mongoose.connect("mongodb://localhost:27017/test")
app.listen(PORT, () => {
    console.log(`Starting port ${PORT}`);

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

app.put("/:id",(req,res)=>{
    const stdId=req.params.id
    const {age,email}=req.body
    personModel.findByIdAndUpdate(stdId,{age,email},{new:true}).then(data=>res.json(data));
})



