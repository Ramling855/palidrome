const router=require("./router/router")
const express =require("express")
const app=express();
const cors=require("cors")
app.use(cors())
app.use("/",router)


module.exports=app