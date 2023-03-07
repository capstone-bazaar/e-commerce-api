import OrderDataAccess from "../data-access/order";
import {
  ServiceCreateNewOrderInput,
  ServiceUpdateOrderStatusByOrderIdInput,
} from "./interfaces/order.interfaces";

const createNewOrder = async ({
  products,
  totalPrice,
  buyer,
}: ServiceCreateNewOrderInput) => {
  return await OrderDataAccess.createNewOrder({ products, totalPrice, buyer });
};

const updateOrderStatusByOrderId = async ({
  orderId,
  status,
}: ServiceUpdateOrderStatusByOrderIdInput) => {
  return await OrderDataAccess.updateOrderStatusByOrderId({
    orderId,
    status,
  });
};

const findOrderById = async ({ id }: { id: string }) => {
  return await OrderDataAccess.findOrderById({ id });
};

export default { createNewOrder, updateOrderStatusByOrderId, findOrderById };
