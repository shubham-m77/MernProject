const serviceModel = require("./Models/serviceModel");
const service=async(req,res)=>{
try {
    const response=await serviceModel.find();
    if(!response){
        console.log("No Service Data found!");
        return;
    }
    res.status(200).json({msg:response});

} catch (error) {
   console.log(`Services:${error}`);
}}
module.exports=service;