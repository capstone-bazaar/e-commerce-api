import OrtderController from "../../controllers/order";

const resolvers = {
  Query: {},
  Mutation: {
    async giveOrder(_: any, __: any, ctx: any) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }

      return await OrtderController.createNewOrder({ buyer: ctx.id });
    },
  },
  Order: {
    __resolveReference() {},
  },
};

export { resolvers };
