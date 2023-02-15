var mongoose = require("mongoose");

const { Schema } = mongoose;

var product = new Schema({
  

  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  file_img: {
    type:String,
    required:false
  },

  category: {
    type:Schema.Types.ObjectId,
    required:true
  }
  
});

module.exports=mongoose.model("product",product);