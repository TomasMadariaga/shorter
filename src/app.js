import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { urlRoutes } from "./routes/url.routes.js";
import { authRoutes } from "./routes/auth.routes.js";

export const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://shortener-frontend-one.vercel.app", "https://shortener-production-1fa3.up.railway.app"],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use(express.json());
app.use(cookieParser());
// app.use(cors());

app.use("/u", urlRoutes);
app.use("/", authRoutes);
