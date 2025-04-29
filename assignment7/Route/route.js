const personModel=require("../Model/userModel")
const express=require("express")
const router=express.Router()
router.use(express.json())


router.get("/", (req,res)=>{
    console.log("In all route");
    // res.send("Home")
     personModel.find().then(data=>res.json(data))
    })


    module.exports = router