const {Schema,model}=require("mongoose");
const contactSchema=new Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true}
});
// Model/Collection
const contactModel=new model("Contact",contactSchema);
module.exports=contactModel;     