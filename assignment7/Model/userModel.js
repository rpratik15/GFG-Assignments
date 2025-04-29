const  mongoose  = require("mongoose");

const newSchema=new mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number},
    email:{type:String, unique:true}
})

const personModel=mongoose.model('person',newSchema)

module.exports=personModel;