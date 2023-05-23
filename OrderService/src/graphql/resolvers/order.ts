import OrderController from "../../controllers/order";

const resolvers = {
  Query: {},
  Mutation: {
    async giveOrder(_: any, args: any, ctx: any) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }

      return await OrderController.createNewOrder({
        buyer: ctx.id,
        shippingAddress: args.shippingAddress,
        paymentMethod: args.paymentMethod,
      });
    },
    async updateOrder(_: any, args: any, ctx: any) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }

      await OrderController.updateOrderById({
        id: args.orderID,
        fields: args,
      });
    },
  },
  Order: {
    __resolveReference() {},
    id(parent: any) {
      return parent._id.toString() || parent.id.toString();
    },
    product(parent: any) {
      return { id: parent.product };
    },
    buyer(parent: any) {
      return { id: parent.buyer };
    },
  },
  User: {
    async orders(user: any) {
      return await OrderController.findOrdersByUserId({ id: user.id });
    },
    async unshippedOrders(user: any) {
      return await OrderController.findUnshippedOrdersByUserId({
        id: user.id,
      });
    },
  },
};

export { resolvers };
