const userModel = require("./Models/userModel");
const bcrypt = require('bcryptjs');
require("dotenv").config();
// home function
const home=async (req,res)=>{
    try {
       res.status(200).send("Hare Krishna Hare Ram"); 
    } catch (error) {
        console.log(error);
    }
}
// register function
const register=async(req,res)=>{
try {
    const {username,email,mobile,password}=req.body;
    const userExist=await userModel.findOne({email:email});
    if(userExist){
       return res.status(400).json({msg:"User/Email Already Exist"});
    }
    // password securing
    // const saltRound=await bycrypt.genSalt(10);
    // const hash_pass=await bcrypt.hash(password,10);
    const userCreated=await userModel.create({username,email,mobile,password});
    res.status(201).json({msg:'Registeration Success',token:await userCreated.generateToken(),userId:userCreated._id.toString()}); 
} catch (error) {
    res.status(500).json("Internal server error!");
}
}
// login function
const login=async(req,res)=>{
try {
    const {email,password}=req.body;
    const userExist=await userModel.findOne({email:email});
    if(!userExist){
        return res.status(400).json({msg:"User Not Exist!"});
    }
    const passwordValid=await userExist.comparePassword(password);
    if(passwordValid){
    res.status(200).json({msg:'Login Success',token:await userExist.generateToken(),userId:userExist._id.toString()}); 
    }
    else{
        res.status(401).json({msg:"Password Invalid!"});
    }
} catch (error) {
    res.status(500).json("Internal Server Error!");

}
}

// user data getting function
const user=async(req,res)=>{
    try {
    const userData=req.user;
    res.status(200).json({userData});
    }
    catch (error) {
    res.status(500).json({ error: "User data not shared", message: error.msg });
}
}
module.exports={home,register,login,user};