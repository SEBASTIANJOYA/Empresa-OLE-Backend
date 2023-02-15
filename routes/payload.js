const express = require("express");
const router=express.Router();
const bodyParser= require("body-parser");
router.use(bodyParser.json());

const {
  
  payOrder
  ,sendOrder

} = require("../controllers/controller_payload");



router.post("/",payOrder);
router.post("/sendOrder",sendOrder);

module.exports = router;
