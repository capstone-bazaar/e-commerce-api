import { Types } from "mongoose";

enum ORDER_STATUSES {
  DELIVERED = "DELIVERED",
  IN_TRANSIT = "IN_TRANSIT",
  CANCELED = "CANCELED",
  PREPARING = "PREPARING",
  NOT_DELIVERED = "NOT_DELIVERED",
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
