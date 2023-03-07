import OrtderController from "../../controllers/order";

const resolvers = {
  Query: {},
  Mutation: {
    async giveOrder(_: any, args: any, ctx: any) {
      const { buyer, products } = args;
      if (!buyer || !products || products.length === 0) {
        throw new Error("Something went wrong! Please check your order again.");
      }
      return await OrtderController.createNewOrder({ buyer, products });
    },
  },
  Order: {
    __resolveReference() {},
  },
};

export { resolvers };
