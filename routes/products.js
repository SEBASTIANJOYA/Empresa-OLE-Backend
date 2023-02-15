const express= require("express");
const router=express.Router();
const bodyParser= require("body-parser");
router.use(bodyParser.json());
const {getProducts,postProducts,uploadFile,putProducts,deleteProducts,getCategories}=require("../controllers/controller_products")
router.get('/',getProducts)
router.post('/',uploadFile,postProducts)
router.put('/',putProducts)
router.delete('/:id/:file',deleteProducts)
router.get('/categories',getCategories);
module.exports = router;