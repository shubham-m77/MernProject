const jwt=require("jsonwebtoken");
const user =require("../Models/userModel");

const authMiddleware=async(req,res,next)=>{
const token=req.header("Authorization");
const JWT_SECRET_KEY="THEUNKNOWNTRUTHISUNKNOWNLIE";
if(!token){
    return res.status(401).json({msg:"Unauthorized HTTP,Token not provided"});
}
const jwtToken=token.replace("Bearer","").trim();
try {
    const isVerified=jwt.verify(jwtToken,JWT_SECRET_KEY);
    
    const userData=await user.findOne({email:isVerified.email}).select({password:0});
    req.user=userData;
    req.token=jwtToken;
    req.id=userData._id;
console.log(userData);
next();
} catch (error) {
    res.status(500).json({msg:"Invalid Token!"});
    console.log(error);
    next();
}

}
module.exports=authMiddleware;