const mongoose=require("mongoose")

const MySchema=new mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number},
    email:{type:String, unique:true}
})

const studentModel=mongoose.model('students',MySchema)


module.exports=studentModel;