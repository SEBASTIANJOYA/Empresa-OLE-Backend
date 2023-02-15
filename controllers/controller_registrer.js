
const User=require("../models/user")
const registrerUser= async(req, res, next)=> {

    
    try{
     
       const user=new User(req.body)
      
       const result= await user.save();

       res.send({result:true})
    }
    catch(err){
      res.send({res:false,error:err})  
    }

    
}

module.exports = {registrerUser}