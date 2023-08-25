import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

const orderRouter = express.Router();
orderRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    console.log("Request body:", req.body);
    try {
      const newOrder = new Order({
        orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
        shippingAddress: req.body.shippingAddress,
        totalPrice: req.body.totalPrice,
      });
      const order = await newOrder.save();
      res.status(201).send({ message: "New Order Created" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send({ message: "Error creating order" });
    }
  })
);
orderRouter.get('/', async (req, res) => {
  const orders = await Order.find();
  res.send(orders);
});
export default orderRouter;
