import mongoose from "mongoose";
import OrderModel from "../db/order";
import {
  DataAccessCreateNewOrderInput,
  DataAccessUpdateOrderStatusByOrderIdInput,
} from "./interfaces/order.interfaces";

const createNewOrder = async (orders: DataAccessCreateNewOrderInput) => {
  return await OrderModel.insertMany(orders);
};

const updateOrderStatusByOrderId = async ({
  orderId,
  fields,
}: DataAccessUpdateOrderStatusByOrderIdInput) => {
  return await OrderModel.updateOne({ orderId }, fields);
};

const findOrderById = async ({ id }: { id: string }) => {
  return await OrderModel.find({ _id: new mongoose.Types.ObjectId(id) });
};

export default { createNewOrder, updateOrderStatusByOrderId, findOrderById };
