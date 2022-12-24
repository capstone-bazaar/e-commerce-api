import ProductController from "../../controllers/product";

const resolvers = {
  Query: {
    product() {
      return;
    },
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
    seller(product: any) {
      return { id: product.seller };
    },
  },
  User: {
    async purchasedProducts(parent: any, args: any, ctx: any) {
      return;
    },
  },
};

export { resolvers };
