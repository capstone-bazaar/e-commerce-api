import { ORDER_STATUSES } from "../../db/interfaces/order.interfaces";

interface ServiceCreateNewOrderInput {
  buyer: string;
  product: string;
  price: number;
  orderNumber: number;
  shippingAddress: string;
  paymentMethod: string;
}

interface ServiceUpdateOrderStatusByOrderIdInput {
  orderId: string;
  fields: {
    status?: ORDER_STATUSES;
    trackingNumber?: string;
  };
}

export { ServiceCreateNewOrderInput, ServiceUpdateOrderStatusByOrderIdInput };
