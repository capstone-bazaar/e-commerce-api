import OrtderController from "../../controllers/order";

const resolvers = {
  Query: {},
  Mutation: {
    async giveOrder(_: any, args: any, ctx: any) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }

      return await OrtderController.createNewOrder({
        buyer: ctx.id,
        shippingAddress: args.shippingAddress,
        paymentMethod: args.paymentMethod,
      });
    },
  },
  Order: {
    __resolveReference() {},
    product(parent: any) {
      return { id: parent.product };
    },
  },
  User: {
    async orders(user: any) {
      return OrtderController.findOrdersByUserId({ id: user.id });
    },
  },
};

export { resolvers };
