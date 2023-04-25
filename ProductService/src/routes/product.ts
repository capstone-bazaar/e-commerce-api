import express from "express";
import ProductController from "../controllers/product";

const router = express.Router();

router.get("/products/:id", async (req, res) => {
  const idParam = req.params.id as string;
  const ids = idParam.split(",");

  if (ids.length === 1) {
    const product = await ProductController.findProductById({
      productID: ids[0],
    });

    if (product) {
      return res.json(product);
    }

    return res.status(404).json("Product not found!");
  }

  const products = await ProductController.findAllProducts({ products: ids });

  return res.json(products);
});

export { router };
