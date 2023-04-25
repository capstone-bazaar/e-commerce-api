import OrderService from "../services/order";
import {
  ControllerCreateNewOrderInput,
  ControllerUpdateOrderStatusByOrderIdInput,
} from "./interfaces/order.interfaces";

import axios from "axios";

const createNewOrder = async ({ buyer }: ControllerCreateNewOrderInput) => {
  try {
    const userResponse: any = await axios.get(
      `${process.env.USER_SERVICE_URL}/users/${buyer}`
    );

    const productsResponse: any = await axios.get(
      `${
        process.env.PRODUCT_SERVICE_URL
      }/products/${userResponse.data.shoppingCart.join(",")}`
    );

    const totalPrice = productsResponse.data.reduce(
      (acc: any, cur: any) => acc + cur.price,
      0
    );

    if (userResponse.data.budget < totalPrice) {
      throw new Error(" Your budget is not enough to cover the total cost");
    }

    const order = await OrderService.createNewOrder({
      totalPrice,
      buyer,
      products: productsResponse.data.map((product: any) => product._id),
    });

    await axios.put(`${process.env.USER_SERVICE_URL}/users/${buyer}`, {
      fields: {
        shoppingCart: [],
        budget: userResponse.data.budget - totalPrice,
      },
    });
    return order;
  } catch (error) {
    throw new Error(error as string);
  }
};

const updateOrderStatusByOrderId = async ({
  orderId,
  status,
}: ControllerUpdateOrderStatusByOrderIdInput) => {
  return await OrderService.updateOrderStatusByOrderId({
    orderId,
    status,
  });
};

const findOrderById = async ({ id }: { id: string }) => {
  return await OrderService.findOrderById({ id });
};

export default { createNewOrder, updateOrderStatusByOrderId, findOrderById };
