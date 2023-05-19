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

const findOrdersByUserId = async ({ id }: { id: string }) => {
  return await OrderModel.find({ buyer: new mongoose.Types.ObjectId(id) });
};

const findUnshippedOrdersByUserId = async ({ id }: { id: string }) => {
  const pipeline: mongoose.PipelineStage[] = [
    {
      $lookup: {
        from: "products",
        localField: "product",
        foreignField: "_id",
        as: "populatedProduct",
      },
    },
    {
      $unwind: {
        path: "$populatedProduct",
      },
    },
    {
      $match: {
        $and: [
          { status: { $nin: ["CANCELED", "DELIVERED"] } },
          { "populatedProduct.seller": new mongoose.Types.ObjectId(id) },
        ],
      },
    },
    { $unset: "populatedProduct" },
  ];

  return await OrderModel.aggregate(pipeline);
};

const updateOrderById = async ({ id, fields }: { id: string; fields: any }) => {
  return await OrderModel.updateOne(
    { _id: new mongoose.Types.ObjectId(id) },
    fields
  );
};

export default {
  findUnshippedOrdersByUserId,
  createNewOrder,
  updateOrderStatusByOrderId,
  findOrderById,
  findOrdersByUserId,
  updateOrderById,
};
