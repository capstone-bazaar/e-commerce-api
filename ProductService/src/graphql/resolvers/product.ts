import ProductController from "../../controllers/product";
import CommentController from "../../controllers/comment";

const resolvers = {
  Query: {
    product() {
      return;
    },
    async findProductById(_: any, args: any, ctx: any) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }
      const { productID } = args;
      return await ProductController.findProductById({
        productID,
      });
    },
    async findAllProducts(_: any, __: any, ctx: any) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }
      return await ProductController.findAllProducts();
    },
  },
  Mutation: {
    async addProduct(_: any, args: any, ctx: any) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }
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
    async createComment(_: any, args: any, ctx: any) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }
      const { userID, comment, rate } = args.fields;
      return await CommentController.createComment({
        userID,
        comment,
        rate,
      });
    },
    async addCommentById(_: any, args: any, ctx: any) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }
      const { userID, productID, comment } = args.fields;
      return await CommentController.addCommentById({
        userID,
        productID,
        comment,
      });
    },
    async deleteCommentById(_: any, args: any, ctx: any) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }
      const { id, productID } = args.fields;
      return await CommentController.deleteCommentById({
        id,
        productID,
      });
    },
    async updateProductById(_: any, args: any, ctx: any) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }
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

    async deleteProductById(_: any, args: any, ctx: any) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }
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
    async __resolveReference(product: any) {
      return await ProductController.findProductById({ productID: product.id });
    },

    seller(product: any) {
      return { id: product.seller };
    },
  },
  User: {
    async purchasedProducts(parent: any, args: any, ctx: any) {
      return;
    },
  },
  Order: {
    products(ids: any) {
      return;
    },
  },
};

export { resolvers };
