import { Router } from "express";
import {
  generateShortUrl,
  redirect,
  getLinks,
  deleteLink
} from "../controllers/url.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

export const urlRoutes = Router();

urlRoutes.post("/", authRequired, generateShortUrl);

urlRoutes.get("/get", authRequired, getLinks);

urlRoutes.delete("/:id", authRequired, deleteLink)

urlRoutes.get("/:id", redirect);
