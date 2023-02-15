const express=require('express')
const Router=express.Router();
const {GetReport}= require("../controllers/controller_report")
const bodyParser=require("body-parser")
Router.use(bodyParser.json())
Router.get("/",GetReport)



module.exports=Router;