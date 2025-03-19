const {Schema,model}=require("mongoose");
const serviceSchema=new Schema({
    service_name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:String,required:true}
});
// Model/Collection
const serviceModel=new model("Service",serviceSchema);
module.exports=serviceModel;     