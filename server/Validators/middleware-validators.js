const validate= (schema)=>async(req,res,next)=>{
try {
    const parseBody=await schema.parseAsync(req.body);
    req.body=parseBody;
    next();
} catch (err) {
    const status=422;
    const msg="Input the fields Properly";
    const extDetails=err.errors[0].message;
    const error={msg,extDetails};
    res.status(status).json(error);
   
}
}

module.exports=validate;