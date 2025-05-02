
const express = require("express");
const personModel = require("../Model/userModel")
const router = express();

router.use(express.json())

router.get("/", (req, res) => {
    console.log("In all route");
    // res.send("Home")
    personModel.find().then(data => res.json(data))
})


router.post("/add", (req, res) => {
    const { name, age, email } = req.body;
    const newData = new personModel({ name, age, email })
    newData.save().then(data =>{ 
        res.json()
        res.send("Record Added");
    })
})

router.put("/:id",(req,res)=>{
    const stdId=req.params.id
    const {age,email}=req.body
    personModel.findByIdAndUpdate(stdId,{age,email},{new:true}).then(data=>res.json(data));
})

router.delete("/:id",(req,res)=>{
    personModel.findByIdAndDelete(req.params.id).then(data=>res.send("Deleted successfully"))
    .catch(err=>res.send("Error in deleting data"))
})


module.exports=router;