const User=require("../models/userModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError=require("../middleware/catchAsyncError");


//add user 
exports.createUser=catchAsyncError(async(req,res,next)=>{
    
 const user=await User.create(req.body);


    res.status(201).json({
        success:true,
        user
    }) 
})


//get  all user
exports.getAllUsers=  catchAsyncError(async (req, res) => {

    const user = await User.find();


    res.status(200).json({
        success: true,
        user
     
    });
});




//update user

exports.updateUser=catchAsyncError(async(req,res,next)=>{
    let user=await User.findById(req.params.id);
    if(!user){
        res.status(500).json({
            success:false,
            message:"user not found"
        })
    }
    user=await User.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });
    res.status(201).json({
        success:true,
        user
    })
})

//delete user
exports.deleteUser=catchAsyncError(async(req,res,next)=>{
    const user=await User.findById(req.params.id);
    if(!user){
        return res.status(500).json({
            success:false,
            message:"user not found"
        })
    }
    
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success:true,
        messege:"User removed successfully"
    })
})

//get a User details


exports.getUserDetails=catchAsyncError(async(req,res,next)=>{
    const user=await User.findById(req.params.id);
    if(!user){
        return next(new ErrorHandler("User not found",404))
        }
    
    res.status(200).json({
        success:true,
        user,
    
    })
    
})
