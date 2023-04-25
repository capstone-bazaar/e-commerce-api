import { ORDER_STATUSES } from "../../db/interfaces/order.interfaces";

interface ControllerCreateNewOrderInput {
  buyer: string;
}

interface ControllerUpdateOrderStatusByOrderIdInput {
  orderId: string;
  status: ORDER_STATUSES;
}

export {
  ControllerCreateNewOrderInput,
  ControllerUpdateOrderStatusByOrderIdInput,
};
