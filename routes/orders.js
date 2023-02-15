const express = require("express");
const router = express.Router();
const {
  getOrders,
  orderDelivered,
} = require("../controllers/controller_orders");

router.get("/", getOrders);
router.post("/:id", orderDelivered);

module.exports = router;
