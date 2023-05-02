import { ORDER_STATUSES } from "../../db/interfaces/order.interfaces";

interface ControllerCreateNewOrderInput {
  buyer: string;
  shippingAddress: string;
  paymentMethod: string;
}

interface ControllerUpdateOrderStatusByOrderIdInput {
  orderId: string;
  fields: {
    status?: ORDER_STATUSES;
    trackingNumber?: string;
  };
}

export {
  ControllerCreateNewOrderInput,
  ControllerUpdateOrderStatusByOrderIdInput,
};
