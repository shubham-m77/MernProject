const express=require("express");
const router=express.Router();
const authController=require("../authController");
const {signupSchema,loginSchema}=require(   "../Validators/auth-validators");
// const loginSchema=require("../Validators/auth-validators");
const validate=require("../Validators/middleware-validators");
const authMiddleware=require("../Validators/auth-middleware");

router.route("/").get(authController.home);
router.route("/user").get(authMiddleware,authController.user);
router.route("/register").post(validate(signupSchema),authController.register);
router.route("/login").post(validate(loginSchema),authController.login);

module.exports=router;