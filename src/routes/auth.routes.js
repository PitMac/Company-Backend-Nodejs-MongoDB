import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import { verify } from "../middlewares";
const router = Router();

router.post(
  "/signup",
  [verify.checkDuplicateUsernameOrEmail, verify.checkRolesExisted],
  authController.signUp
);
router.post("/signin", authController.signIn);

export default router;
