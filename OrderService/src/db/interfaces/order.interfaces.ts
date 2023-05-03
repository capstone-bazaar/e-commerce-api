import { Types } from "mongoose";

enum ORDER_STATUSES {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}

interface OrderSchemaInterface {
  paymentMethod: string;
  buyer: Types.ObjectId;
  product: Types.ObjectId;
  price: number;
  status: ORDER_STATUSES;
  orderNumber: number;
  trackingNumber: string;
  shippingAddress: string;
}

export { ORDER_STATUSES, OrderSchemaInterface };
