const Product=require("../models/products")
const getIndex=async(req, res, next)=> {

    try {

        const product= await Product.find({})

        res.send({result:true,products:product})

        
    } catch (error) {
        res.status(500).json({ result: false, error: error.toString() });
    }

}



module.exports={getIndex}