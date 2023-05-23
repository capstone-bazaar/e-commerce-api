import OrderDataAccess from "../data-access/order";
import {
  ServiceCreateNewOrderInput,
  ServiceUpdateOrderStatusByOrderIdInput,
} from "./interfaces/order.interfaces";

const createNewOrder = async (orders: ServiceCreateNewOrderInput) => {
  return await OrderDataAccess.createNewOrder(orders);
};

const updateOrderStatusByOrderId = async ({
  orderId,
  fields,
}: ServiceUpdateOrderStatusByOrderIdInput) => {
  return await OrderDataAccess.updateOrderStatusByOrderId({
    orderId,
    fields,
  });
};

const findOrderById = async ({ id }: { id: string }) => {
  return await OrderDataAccess.findOrderById({ id });
};

const findOrdersByUserId = async ({ id }: { id: string }) => {
  return await OrderDataAccess.findOrdersByUserId({ id });
};

export default {
  createNewOrder,
  updateOrderStatusByOrderId,
  findOrderById,
  findOrdersByUserId,
};
