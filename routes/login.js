const express = require("express");
const router = express.Router();
const { registrerUser } = require("../controllers/controller_registrer");
const bodyParser=require("body-parser")
router.use(bodyParser.json())
const { loginUser } = require("../controllers/controller_login");
router.post("/", loginUser);
module.exports = router;
