const userModel=require("./Models/userModel");
const contactModel=require("./Models/contactModel");
// UserData Fetching
const allUsers=async(req,res,next)=>{
try {
    const users=await userModel.find({},{password:0});
    if(!users || users.length===0){
       return res.status(404).json({msg:"No userData found!"});  
    }
    return res.status(200).json(users);
} catch (error) {
    next(error);
}
}
// Contact Msgg Fetching
const contactMsg=async(req,res,next)=>{
    try {
        const contacts=await contactModel.find();
        if(!contacts || contacts.length===0){
            return res.status(404).json({msg:"No Contact Messages found!"});  
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
    }

// User Deletion
const deleteUserById=async(req,res,next)=>{
try {
    const id=req.params.id;
    await userModel.deleteOne({_id:id});
    return res.status(200).json({msg:"User Deleted"});
} catch (error) {
    next(error);
}
}

// delete single contact
const deleteContactById=async(req,res,next)=>{
    try {
        const id=req.params.id;
        await contactModel.deleteOne({_id:id});
        return res.status(200).json({msg:"Message Deleted"});
    } catch (error) {
        next(error);
    }
    }

// getting single user data
const getUserById=async(req,res,next)=>{
    try {
        const id=req.params.id;
        const data=await userModel.findOne({_id:id},{password:0});
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

// Updtaing single user data
const updateUserById=async(req,res,next)=>{
    try {
        const id=req.params.id;
        const updatedData=req.body;
        const updateUser=await userModel.updateOne({_id:id},{$set:updatedData});
        return res.status(200).json(updateUser);
    } catch (error) {
        next(error);
    }
}


module.exports={allUsers,contactMsg,deleteUserById,getUserById,updateUserById,deleteContactById};
