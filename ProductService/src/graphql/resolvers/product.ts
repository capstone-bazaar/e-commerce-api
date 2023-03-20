import ProductController from "../../controllers/product";
import CommentController from "../../controllers/comment";

const resolvers = {
  Query: {
    product() {
      return;
    },
    async findProductById(
      parent: any,
      args: any,
      contextValue: any,
      info: any
    ) {
      const { productID } = args.fields;
      return await ProductController.findProductById({
        productID,
      });
    },
    async findAllProducts(
      parent: any,
      args: any,
      contextValue: any,
      info: any
    ) {
      return await ProductController.findAllProducts();
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
    async createComment(parent: any, args: any, contextValue: any, info: any) {
      const { userID, comment, rate } = args.fields;
      return await CommentController.createComment({
        userID,
        comment,
        rate,
      });
    },
    async addCommentById(parent: any, args: any, contextValue: any, info: any) {
      const { userID, productID, comment } = args.fields;
      return await CommentController.addCommentById({
        userID,
        productID,
        comment,
      });
    },
    async deleteCommentById(
      parent: any,
      args: any,
      contextValue: any,
      info: any
    ) {
      const { id, productID } = args.fields;
      return await CommentController.deleteCommentById({
        id,
        productID,
      });
    },
    async updateProductById(
      parent: any,
      args: any,
      contextValue: any,
      info: any
    ) {
      const { userID, price, currency, stockCount, seller, imageURL } =
        args.fields;
      return await ProductController.updateProductById({
        userID,
        price,
        currency,
        stockCount,
        seller,
        imageURL,
      });
    },

    async deleteProductById(
      parent: any,
      args: any,
      contextValue: any,
      info: any
    ) {
      const { productID } = args.fields;
      return await ProductController.deleteProductById({ productID });
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
