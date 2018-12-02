const Order = require("../models/orders");

const getOrders = (req, res, next) => {
  return res.json({
    data: {
      orders: Order.generateOrders()
    }
  });
};

const getOrder = (req, res, next) => {
  return res.json({
    data: {
      order: Order.model()
    }
  })
}

module.exports = { getOrders, getOrder };
