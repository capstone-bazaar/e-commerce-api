import { ORDER_STATUSES } from "../../db/interfaces/order.interfaces";

interface DataAccessCreateNewOrderInput {
  buyer: string;
  products: string[];
  totalPrice: number;
}

interface DataAccessUpdateOrderStatusByOrderIdInput {
  orderId: string;
  status: ORDER_STATUSES;
}

export {
  DataAccessCreateNewOrderInput,
  DataAccessUpdateOrderStatusByOrderIdInput,
};
