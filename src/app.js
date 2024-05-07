import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { urlRoutes } from "./routes/url.routes.js";
import { authRoutes } from "./routes/auth.routes.js";

export const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
<<<<<<< HEAD
    origin: "https://shortener-production-1fa3.up.railway.app/",
    credentials: true
=======
    origin: ["http://localhost:5173", "https://shortener-frontend-one.vercel.app", "https://shortener-production-1fa3.up.railway.app"],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
>>>>>>> 0be1e588fb9560ef8d6f4684361b2be3e1b169bb
  })
);

app.use("/u", urlRoutes);
app.use("/auth", authRoutes);
