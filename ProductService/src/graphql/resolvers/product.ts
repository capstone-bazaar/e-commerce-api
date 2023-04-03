import ProductController from "../../controllers/product";
import CommentController from "../../controllers/comment";

const resolvers = {
  Query: {
    product() {
      return;
    },
    async findProductById(_: any, args: any) {
      const { productID } = args;
      return await ProductController.findProductById({
        productID,
      });
    },
    async findAllProducts() {
      return await ProductController.findAllProducts();
    },
  },
  Mutation: {
    async addProduct(_: any, args: any) {
      const { price, currency, stockCount, seller, imageURLs, comments } =
        args.fields;

      return await ProductController.createProduct({
        price,
        currency,
        stockCount,
        seller,
        imageURLs,
        comments,
      });
    },
    async createComment(_: any, args: any) {
      const { userID, comment, rate } = args.fields;
      return await CommentController.createComment({
        userID,
        comment,
        rate,
      });
    },
    async addCommentById(_: any, args: any) {
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
    async updateProductById(_: any, args: any) {
      const { userID, price, currency, stockCount, seller, imageURLs } =
        args.fields;
      return await ProductController.updateProductById({
        userID,
        price,
        currency,
        stockCount,
        seller,
        imageURLs,
      });
    },

    async deleteProductById(_: any, args: any) {
      const { productID } = args.fields;
      return await ProductController.deleteProductById({ productID });
    },
  },

  Comment: {
    user(comment: any) {
      return { id: comment.userID };
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
