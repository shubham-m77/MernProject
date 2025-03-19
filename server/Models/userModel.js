const mongoose=require("mongoose");
const bcrypt = require('bcrypt');
const JWT_KEY="THEUNKNOWNTRUTHISUNKNOWNLIE";
const jwt = require('jsonwebtoken');
const userSchema =new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    mobile:{
        type:Number,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
});
// password securing
userSchema.pre("save",async function(next){
console.log('pre_method',this);
if(!this.isModified('password')){
return next();
}
try {
    const saltRound=await bcrypt.genSalt(10);
    const hash_pass=await bcrypt.hash(this.password,saltRound);
    this.password=hash_pass;
    next();
} catch (error) {
    next(error);
}
});
//Password Securing
userSchema.methods.comparePassword=async function(password){
return await bcrypt.compare(password,this.password);
}
// json web token
userSchema.methods.generateToken=async function(){
try {
    return jwt.sign({userId:this._id.toString(),
        email:this.email,
        isAdmin:this.isAdmin},
    JWT_KEY,{
        expiresIn:"7d"
    });
} catch (error) {
    console.error(error);
}
}
const userModel=new mongoose.model('User',userSchema);
module.exports=userModel;
