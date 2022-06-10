
const app=require("./app");
const dbconnect = require("./db");

require("dotenv").config()
dbconnect(process.env.mongourl).then(()=>{
    app.listen(port,()=>{
        console.log(`server started at port ${port}`)
    })
    console.log("mogodb connected")
})
const port=process.env.PORT||3000;
