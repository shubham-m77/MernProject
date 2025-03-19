const errorMiddleware=async(error,req,res,next)=>{
const status=error.status || 500;
const msg=error.msg || "Internal Error!";
const extDetails=error.extraDetails | "Backend Error!";
return res.status(status).json({msg,extDetails});
}
module.exports=errorMiddleware;