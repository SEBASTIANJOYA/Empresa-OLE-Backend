var mongoose = require("mongoose");

const { Schema } = mongoose;

var user = new Schema({
 

  name: {
    type: String,
    required: true,
  },
  
  email: {
    type: String,
    required: true,
  },

  name_user:{
    type:String,
    required:true
  },

  password:{
    type:String,
    required:true
  },
  type_user:{
    type:Number,
    required:true

  }
});

module.exports=mongoose.model("user",user);