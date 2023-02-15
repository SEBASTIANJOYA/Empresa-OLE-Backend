const express = require("express");
const router = express.Router();
const { registrerUser } = require("../controllers/controller_registrer");
const bodyParser=require("body-parser")
router.use(bodyParser.json())
router.post("/", registrerUser);

module.exports = router;
