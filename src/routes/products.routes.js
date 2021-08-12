import { Router } from "express";
const router = Router();
import * as productCtrl from "../controllers/products.controller";
import { authJwt } from "../middlewares";

router.get("/", productCtrl.getProducts);

router.get("/:productId", productCtrl.getProduct);

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isModerator],
  productCtrl.createProduct
);

router.put(
  "/:productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  productCtrl.updateProduct
);

router.delete(
  "/:productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  productCtrl.deleteProduct
);

export default router;
