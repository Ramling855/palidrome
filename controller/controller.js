const model=require("../model/model")
const signup=(req,res)=>{
    
    res.send("datatatata")
    // console.log(req.body)
    // const data=new model(req.body)
    // data.save().then(()=>{
    //   res.json({
    //     message:"data submitedd in mongo"})
    // })
    // .catch(()=>{
    //     res.json({
    //         message:"error schema"})
    // })

}
module.exports={
    signup
}