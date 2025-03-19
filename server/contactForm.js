const Contact=require("./Models/contactModel");
const contactForm=async(req,res)=>{
    try {
    const response=req.body;
    await Contact.create(response);
    return res.status(200).json({message:"Message Sent Successfully"});
    } catch (error) {
        res.status(500).json({message:"Message not sent!"});
    }
}
module.exports=contactForm;