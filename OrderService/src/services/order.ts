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

const findUnshippedOrdersByUserId = async ({ id }: { id: string }) => {
  return await OrderDataAccess.findUnshippedOrdersByUserId({ id });
};

const updateOrderById = async ({ id, fields }: { id: string; fields: any }) => {
  return await OrderDataAccess.updateOrderById({ id, fields });
};

const findOrderByTrackingNumber = async ({ trackingNumber }: { trackingNumber: string }) => {
  return await OrderDataAccess.findOrderByTrackingNumber({ trackingNumber });
};

const updateOrderByTrackingNumber = async ({
  trackingNumber,
  fields,
}: {
  trackingNumber: string;
  fields: any;
}) => {
  return await OrderDataAccess.updateOrderByTrackingNumber({ trackingNumber, fields });
};

export default {
  updateOrderByTrackingNumber,
  findOrderByTrackingNumber,
  findUnshippedOrdersByUserId,
  createNewOrder,
  updateOrderStatusByOrderId,
  findOrderById,
  findOrdersByUserId,
  updateOrderById,
};
