import { ORDER_STATUSES } from "../../db/interfaces/order.interfaces";

interface DataAccessCreateNewOrderInput {
  buyer: string;
  product: string;
  price: number;
  orderNumber: number;
  shippingAddress: string;
  paymentMethod: string;
}

interface DataAccessUpdateOrderStatusByOrderIdInput {
  orderId: string;
  fields: {
    status?: ORDER_STATUSES;
    trackingNumber?: string;
  };
}

export {
  DataAccessCreateNewOrderInput,
  DataAccessUpdateOrderStatusByOrderIdInput,
};
