import { Router } from "express";
import {
  register,
  login,
  logout,
  verifyToken,
} from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
import { authRequired } from "../middlewares/validateToken.js";

export const authRoutes = Router();

authRoutes.post("/register", validateSchema(registerSchema), register);
authRoutes.post("/login", validateSchema(loginSchema), login);
authRoutes.post("/logout", logout);
authRoutes.get("/verify", verifyToken);
