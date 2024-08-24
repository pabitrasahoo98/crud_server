const mongoose=require('mongoose');
const validator=require("validator");

 
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter your name"],
        maxLength:[30,"name can not exceed 30 characters"],
        minLength:[4,"name should have more than 4 characters"]
    },
    email:{
        type:String,
        required:[true,"please enter your email"],
        unique:true,
        validate:[validator.isEmail,"please enter a valid email"]

    },
    mobileNo:{
        type:String,
        required:[true,"please enter valid mobile no"],
        minLength:[10,"Enter correct Phone number"],
        validate:[validator.isMobilePhone,"please enter a valid Phone Number"],
        
    },
   age:{
        type:Number,
    },

})

const  UserModel= mongoose.model("User",userSchema)
module.exports=UserModel