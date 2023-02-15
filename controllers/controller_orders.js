
const Order=require("../models/order")
const getOrders=async(req, res)=>{

    const require= await Order.aggregate([

        { "$unwind": "$description" },
        { "$lookup": {
            "from": "products",
            "localField": "description.product",
            "foreignField": "_id",
            "as": "description.product",
        }},
        { "$lookup": {
            "from": "users",
            "localField": "user",
            "foreignField": "_id",
            "as": "user",
        }},
        { "$unwind": "$description.product" },

        { "$group": {
            "_id": "$_id",
            "total": { "$first": "$total" },
            "user" : { "$first": "$user" },
            "dispatched" : { "$first": "$dispatched" },
            "description" : { "$push": "$description" },
           
          }}
    ])

    res.send(require);
}

const orderDelivered =async(req, res)=>{

    try{
        const require= await Order.findByIdAndUpdate(req.params.id,{dispatched:true});
        res.sendStatus(200);
    }
    catch(e){
        res.sendStatus(500);
    }
    

    
}

module.exports = {getOrders,orderDelivered}