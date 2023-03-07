import mongoose from "mongoose";
import OrderModel from "../db/order";
import {
  DataAccessCreateNewOrderInput,
  DataAccessUpdateOrderStatusByOrderIdInput,
} from "./interfaces/order.interfaces";

const createNewOrder = async ({
  products,
  totalPrice,
  buyer,
}: DataAccessCreateNewOrderInput) => {
  return await OrderModel.create({
    totalPrice,
    buyer: new mongoose.Types.ObjectId(buyer),
    products: products.map(
      (product: string) => new mongoose.Types.ObjectId(product)
    ),
  });
};

const updateOrderStatusByOrderId = async ({
  orderId,
  status,
}: DataAccessUpdateOrderStatusByOrderIdInput) => {
  return await OrderModel.updateOne({ orderId }, { status });
};

const findOrderById = async ({ id }: { id: string }) => {
  return await OrderModel.find({ _id: new mongoose.Types.ObjectId(id) });
};

export default { createNewOrder, updateOrderStatusByOrderId, findOrderById };
