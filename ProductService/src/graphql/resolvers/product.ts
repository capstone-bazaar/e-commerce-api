import ProductController from "../../controllers/product";
import CommentController from "../../controllers/comment";
import CategoryController from "../../controllers/category";
import CategoryDataAccess from "../../data-access/category";
import { signURL, uploadToStorage } from "../../helpers/image-upload";
import { nanoid } from "nanoid";

const resolvers = {
  Query: {
    product() {
      return;
    },
    async getAllCategories() {
      return await CategoryController.getAllCategories();
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
    async findAllProducts(_: any, args: any, ctx: any) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }

      return await ProductController.findAllProducts({
        products: args.products,
        filters: args.filters,
      });
    },
  },
  Mutation: {
    async addProduct(_: any, args: any, ctx: any) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }

      const { price, stockCount, images, title, description, category } =
        args.fields;

      let imageURLs: any[] = [];
      if (images && images.length > 0) {
        imageURLs = await Promise.all(
          images.map(async (image: string) => {
            const imageURL: any = await uploadToStorage({
              filename: `${ctx.id}-${nanoid(5)}`,
              file: image,
            });

            return imageURL.Location;
          })
        );
      }

      return await ProductController.createProduct({
        seller: ctx.id,
        price,
        description,
        title,
        stockCount,
        imageURLs,
        category,
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
    async addComment(_: any, args: any, ctx: any) {
      if (!ctx || !ctx.id || !ctx.isAuth) {
        throw new Error("You have to login!");
      }
      const { productID, comment, rate } = args.fields;
      return await CommentController.addComment({
        userID: ctx.id,
        productID,
        comment,
        rate,
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
      const { price, stockCount, category, title, description, productID } =
        args.fields;
      return await ProductController.updateProductById({
        userID: ctx.id,
        productID,
        price,
        stockCount,
        category,
        title,
        description,
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

    async category(parent: any) {
      return await CategoryDataAccess.findCategoryById({ id: parent.category });
    },
    async avgRate(parent: any) {
      return ProductController.calculateAvgRatingbyProductID({ id: parent.id });
    },
    seller(product: any) {
      return { id: product.seller };
    },
    imageURLs(parent: any) {
      return parent.imageURLs.map((url: string) => {
        return signURL(url);
      });
    },
  },
  User: {
    async purchasedProducts(parent: any, args: any, ctx: any) {
      return;
    },
    async products(user: any) {
      return await ProductController.findAllProducts({ seller: user.id });
    },
  },
  Order: {
    products(ids: any) {
      return;
    },
  },
};

export { resolvers };
