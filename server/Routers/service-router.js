const express=require("express");
const service = require("../service-controller");
const router=express.Router();
router.route("/services").get(service);

module.exports=router;