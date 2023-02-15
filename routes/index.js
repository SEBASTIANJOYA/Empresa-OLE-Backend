const express = require("express");
var router = express.Router();

const { getIndex} = require("../controllers/controller_index");

router.get("/", getIndex);


module.exports = router;
