const adminMiddleware=async (req,res,next)=>{
try {
    const adminStatus=req.user.isAdmin;
    if(!adminStatus){
        res.status(403).json({msg:"Access denied, You're not an admin!"});
    }
    next();
} catch (error) {
    next(error);
}
}
module.exports=adminMiddleware;