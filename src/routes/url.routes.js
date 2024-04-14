import { Router } from "express";
import { generateShortUrl, redirect } from "../controllers/url.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

export const urlRoutes = Router();

urlRoutes.post("/",authRequired, generateShortUrl);

urlRoutes.get("/:id", redirect);
