import OrderService from "../services/order";
import {
  ControllerCreateNewOrderInput,
  ControllerUpdateOrderStatusByOrderIdInput,
} from "./interfaces/order.interfaces";

import axios from "axios";

const createNewOrder = async ({
  buyer,
  shippingAddress,
  paymentMethod,
}: ControllerCreateNewOrderInput) => {
  try {
    const { data: user }: any = await axios.get(
      `${process.env.USER_SERVICE_URL}/users/${buyer}`
    );

    if (user.shoppingCart.length === 0) {
      throw new Error("Your shopping cart is empty");
    }

    const productsResponse: any = await axios.get(
      `${process.env.PRODUCT_SERVICE_URL}/products`,
      { params: { productIds: user.shoppingCart.join(",") } }
    );

    if (paymentMethod === "MB_MONEY") {
      const totalPrice = productsResponse.data.reduce(
        (acc: any, cur: any) => acc + cur.price,
        0
      );

      if (user.budget < totalPrice) {
        throw new Error(" Your budget is not enough to cover the total cost");
      }

      user.budget = user.budget - totalPrice;
    }

    const orderNumber = Math.floor(Math.random() * 1000000);

    const orderItems = productsResponse.data.map((product: any) => ({
      buyer: user._id,
      product: product._id,
      price: product.price,
      orderNumber,
      shippingAddress,
      paymentMethod,
    }));

    await OrderService.createNewOrder(orderItems);

    await axios.put(`${process.env.USER_SERVICE_URL}/users/${buyer}`, {
      fields: {
        shoppingCart: [],
        budget: user.budget,
      },
    });
    return true;
  } catch (error) {
    throw new Error(error as string);
  }
};

const updateOrderStatusByOrderId = async ({
  orderId,
  fields,
}: ControllerUpdateOrderStatusByOrderIdInput) => {
  return await OrderService.updateOrderStatusByOrderId({
    orderId,
    fields,
  });
};

const findOrderById = async ({ id }: { id: string }) => {
  return await OrderService.findOrderById({ id });
};

const findOrderByTrackingNumber = async ({ trackingNumber }: { trackingNumber: string }) => {
  return await OrderService.findOrderByTrackingNumber({ trackingNumber });
};

const findOrdersByUserId = async ({ id }: { id: string }) => {
  return await OrderService.findOrdersByUserId({ id });
};

const findUnshippedOrdersByUserId = async ({ id }: { id: string }) => {
  return await OrderService.findUnshippedOrdersByUserId({ id });
};

const updateOrderById = async ({ id, fields }: { id: string; fields: any }) => {
  return await OrderService.updateOrderById({ id, fields });
};

const updateOrderByTrackingNumber = async ({
  trackingNumber,
  fields,
}: {
  trackingNumber: string;
  fields: any;
}) => {
  return await OrderService.updateOrderByTrackingNumber({ trackingNumber, fields });
};

export default {
  updateOrderByTrackingNumber,
  findUnshippedOrdersByUserId,
  createNewOrder,
  updateOrderStatusByOrderId,
  findOrderById,
  findOrdersByUserId,
  updateOrderById,
  findOrderByTrackingNumber,
};
