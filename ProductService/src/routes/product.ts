import express from "express";
import ProductController from "../controllers/product";

const router = express.Router();

router.get("/products", async (req, res) => {
  const productIds = req.query.productIds as string;
  const ids = productIds.split(",");

  const products = await ProductController.findAllProducts({ products: ids });

  return res.json(products);
});

router.get("/products/:id", async (req, res) => {
  const productID = req.params.id as string;

  const product = await ProductController.findProductById({
    productID,
  });

  if (product) {
    return res.json(product);
  }

  return res.status(404).json("Product not found!");
});

export { router };
