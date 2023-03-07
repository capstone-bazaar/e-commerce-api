import { Types } from "mongoose";

enum ORDER_STATUSES {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}

interface OrderSchemaInterface {
  buyer: Types.ObjectId;
  products: Types.ObjectId[];
  totalPrice: number;
  status: ORDER_STATUSES;
  orderId: string;
}

export { ORDER_STATUSES, OrderSchemaInterface };
