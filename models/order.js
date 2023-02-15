var mongoose = require("mongoose");

const { Schema } = mongoose;

var order = new Schema({

  total: {
    type: Number,
    required: true,
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },

  dispatched:{
    type:Boolean,
    required:true
  },

  description:[{
    product: {
      type: Schema.Types.ObjectId,
      ref: 'product',
    },
    amount: {
      type: Number,
      required: true,
    },
  
    subtotal: {
      type: Number,
      required: true,
    },
  
  
   
  
}]


  
});

module.exports=mongoose.model("order",order);