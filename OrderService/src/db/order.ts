import {
  OrderSchemaInterface,
  ORDER_STATUSES,
} from "./interfaces/order.interfaces";
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const orderSchema = new Schema<OrderSchemaInterface>(
  {
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    trackingNumber: String,
    shippingAddress: String,
    price: Number,
    status: {
      type: String,
      enum: [
        ORDER_STATUSES.PENDING,
        ORDER_STATUSES.COMPLETED,
        ORDER_STATUSES.CANCELED,
      ],
      default: ORDER_STATUSES.PENDING,
    },
    orderNumber: Number,
    paymentMethod: String,
  },
  {
    timestamps: true,
  }
);

const OrderModel = model<OrderSchemaInterface>("Order", orderSchema);

export default OrderModel;
