const express=require("express")
const {signup}=require("../controller/controller")
const router=express.Router()
router.get("/",signup)
module.exports=router