import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { urlRoutes } from "./routes/url.routes.js";
import { authRoutes } from "./routes/auth.routes.js";

export const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/u", urlRoutes);
app.use("/auth", authRoutes);
