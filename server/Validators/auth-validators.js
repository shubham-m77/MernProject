const {z}=require("zod");

// User Schema
const signupSchema=z.object({
 username:z.string({required_error:"Username Required!"})
    .trim().min(3,{message:"Username: Enter min 3 characters!"}).
    max(55,{message:"Username: Maximum 55 characters allowed"}),

 email:z.string({required_error:"Email id required!"})
    .trim().email({message:"Email: Enter Valid Email address!"})
    .min(8,{message:"Email: Enter min 8 characters!"}).
    max(55,{message:"Email: Maximum 55 characters allowed"}),

 mobile:z.string({required_error:"Mobile No. Required!"})
    .trim()
    .min(10,{message:"Mobile: Enter 10 digits number"}).
    max(10,{message:"Mobile: Maximum 10 digits allowed"}),

 password:z.string({required_error:"Password Required!"})
    .trim()
    .min(6,{message:"Password: Enter min 6 chars"}).
    max(55,{message:"Password: Maximum 55 chars allowed"}),

});

const loginSchema=z.object({
   email:z.string({required_error:"Email id required!"})
      .trim().email({message:"Enter Valid Email address!"})
      .min(8,{message:"Enter min 8 characters!"}).
      max(55,{message:"Maximum 55 characters allowed"}),
  
   password:z.string({required_error:"Password Required!"})
      .trim()
      .min(6,{message:"Enter min 6 chars"}).
      max(55,{message:"Maximum 55 chars allowed"}),
  
  });

module.exports={signupSchema,loginSchema};