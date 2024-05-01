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

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || "http://localhost:5173" === origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS Policity"));
//     }
//   },
//   credentials: true,
// };
// app.use(cors(corsOptions));



// app.options("*", cors());

app.use(express.json());
app.use(cookieParser());

app.use("/u", urlRoutes);
app.use("/auth", authRoutes);
