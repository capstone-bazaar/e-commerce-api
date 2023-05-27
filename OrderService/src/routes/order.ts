import express from "express";
import OrderController from "../controllers/order";

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
