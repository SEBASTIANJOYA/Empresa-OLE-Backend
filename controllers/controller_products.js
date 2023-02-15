const Product=require("../models/products")
const Categories=require("../models/category")
const mongoose=require("mongoose")
const multer=require("multer")
const fs=require("fs")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "imgs");
    },
    filename: (req, file, cb) => {
        cb(null,`${Date.now()}-${file.originalname}`)
    }
});

const upload=multer({storage:storage})

const uploadFile=upload.single('myFile')
const getProducts= async (req, res, next) => {
   
    try {

        const product= await Product.find({})

        res.send({result:true,products:product})

        
    } catch (error) {
        res.status(500).json({ result: false, error: error.toString() });
    }
   
    
    
}

const postProducts= async (req, res, next) => {

    

   

    try {

        const product=new Product({

            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            file_img:req.file.filename,
            category:req.body.category

        })
    
        const result = await product.save();

        res.send({result:true})
        
    } catch (error) {
        
        res.send({result:false})
    }

    
}


const putProducts= async (req, res, next) => {

    res.send("PUT PRODUCTS")
}
const deleteProducts= async (req, res, next) => {
    
    try {

        fs.unlink(`imgs/${req.params.file}`, function (err) {
            if (err) throw err;
            
            
        });
        const deletes=await Product.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id))

        res.status(200).json({result:true})
        
    } catch (error) {
        res.status(500).json({result:false,error:err})
    }
    
    
}

const getCategories= async (req, res, next) => {
    
    
    try {

            const categories=await Categories.find({})

            res.send({result:true,categories:categories})
        
    } catch (error) {
        res.status(500).json({result:false,error:err})
    }
}


module.exports={getProducts,postProducts,uploadFile,putProducts,deleteProducts,getCategories}