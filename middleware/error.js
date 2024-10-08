const ErrorHandler=require("../utils/errorhandler")
module.exports =(err,req,res,next)=>{
    err.statusCode=err.statusCode|| 500;
    err.messege=err.messege|| "internal server error";

//wrong mongodb id error
if(err.name==="CastError"){
    const message=`resource not found,Invalid:${err.path}`;
    err=new ErrorHandler(message,400)
}

//mogoose duplicate key error 
if(err.code===11000){
    const message=`Duplicate ${Object.keys(err.keyValue)} Email Entered`
    err=new ErrorHandler(message,400)
}


    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}

