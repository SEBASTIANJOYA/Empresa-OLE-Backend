const User= require("../models/user");
const Product= require("../models/products");
const Order= require("../models/order");

const GetReport=async(req, res, next) => {

    const user=await User.find({}).count();
    const product=await Product.find({}).count();
    const order=await Order.find({}).count();
    const orders=await Order.find({});
    const populate=await Order.find({}).populate('name').count();
    res.send({user:user,product:product,order:order,orders:orders,populate:populate });
}


const MostSelledProducts=async(req, res, next) => {

    try {

       

        res.send(product);
        
    } catch (error) {

        res.sendStatus(500);
        
    }

   
}
module.exports={GetReport,MostSelledProducts};