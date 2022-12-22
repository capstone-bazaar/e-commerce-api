import ProductController from "../../controllers/product";

const resolvers = {
  Query: {
    product(parent: any) {},
  },
  Mutation: {
    async addProduct(parent: any, args: any, contextValue: any, info: any) {
      const { price, currency, stockCount, seller, imageURL, comments } =
        args.fields;

      return await ProductController.createProduct({
        price,
        currency,
        stockCount,
        seller,
        imageURL,
        comments,
      });
    },
  },

  Product: {
    __resolveReference() {},
  },
  User: {
    id(parent: any, args: any, ctx: any) {
      return parent;
    },
    async purchasedProducts() {
      return;
    },
  },
};

export { resolvers };
