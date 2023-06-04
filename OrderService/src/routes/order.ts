import express from "express";
import OrderController from "../controllers/order";
import { ORDER_STATUSES } from "../db/interfaces/order.interfaces";
import axios from "axios";

const router = express.Router();

router.get("/tracking/:trackingNumber", async (req, res) => {
  const trackingNumber = req.params.trackingNumber as string;

  const order = await OrderController.findOrderByTrackingNumber({
    trackingNumber,
  });

  if (order) {
    return res.json(order);
  }

  return res.status(404).json("Order not found!");
});

router.put("/tracking/:trackingNumber", async (req, res) => {
  const trackingNumber = req.params.trackingNumber as string;

  const order = await OrderController.findOrderByTrackingNumber({
    trackingNumber,
  });

  if (order) {
    try {
      if (req.body.status === ORDER_STATUSES.DELIVERED) {
        const productGetResponse = await axios.get(
          `${
            process.env.PRODUCT_SERVICE_URL
          }/products/${order.product.toString()}`
        );

        const product = productGetResponse.data;

        const userGetResponse = await axios.get(
          `${process.env.USER_SERVICE_URL}/users/${product.seller.toString()}`
        );

        const user = userGetResponse.data;

        await axios.put(
          `${process.env.USER_SERVICE_URL}/users/${product.seller.toString()}`,
          {
            fields: { budget: (user?.budget || 0) + order.price },
          }
        );
      }

      await OrderController.updateOrderByTrackingNumber({
        trackingNumber,
        fields: { status: req.body.status },
      });
      return res.json("Order updated!");
    } catch (error) {
      return res.status(400).json("Something went wrong!");
    }
  }

  return res.status(404).json("Order not found!");
});

export { router };
