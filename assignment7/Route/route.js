const personModel=require("../Model/userModel")
const express=require("express")
const router=express.Router()
router.use(express.json())


router.get("/",async (req,res)=>{
    await personModel.find().then(data=>res.json(data))
    })


    module.exports = router