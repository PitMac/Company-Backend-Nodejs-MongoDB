import { Router } from "express";
const router = Router();

import * as userController from "../controllers/user.controller";
import { authJwt, verify } from "../middlewares";
router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin, verify.checkRolesExisted],
  userController.createUser
);

export default router;
