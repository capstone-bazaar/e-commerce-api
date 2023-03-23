import OrderDataAccess from "../data-access/order";
import {
  ControllerCreateNewOrderInput,
  ControllerUpdateOrderStatusByOrderIdInput,
} from "./interfaces/order.interfaces";

const createNewOrder = async ({
  products,
  buyer,
}: ControllerCreateNewOrderInput) => {
  let totalPrice = 0;

  return await OrderDataAccess.createNewOrder({ products, totalPrice, buyer });
};

const updateOrderStatusByOrderId = async ({
  orderId,
  status,
}: ControllerUpdateOrderStatusByOrderIdInput) => {
  return await OrderDataAccess.updateOrderStatusByOrderId({
    orderId,
    status,
  });
};

const findOrderById = async ({ id }: { id: string }) => {
  return await OrderDataAccess.findOrderById({ id });
};

export default { createNewOrder, updateOrderStatusByOrderId, findOrderById };
