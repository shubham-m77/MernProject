const express=require("express");
const router=express.Router();
const contactForm=require("../contactForm");

router.route("/contact").post(contactForm);

module.exports=router;