const express = require('express');
const router = express.Router();
const Controller = require("../controllers/order.controller");

router.get("/", Controller.getOrders);
router.get("/:id", Controller.getOrder)

module.exports = router;
