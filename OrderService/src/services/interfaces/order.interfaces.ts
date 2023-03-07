import { ORDER_STATUSES } from "../../db/interfaces/order.interfaces";

interface ServiceCreateNewOrderInput {
  buyer: string;
  products: string[];
  totalPrice: number;
}

interface ServiceUpdateOrderStatusByOrderIdInput {
  orderId: string;
  status: ORDER_STATUSES;
}

export { ServiceCreateNewOrderInput, ServiceUpdateOrderStatusByOrderIdInput };
