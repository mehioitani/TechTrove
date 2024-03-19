import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/errorHandler.js";
import ConnectDB from "./config/db.js";
// import orderRoute from "./routes/techOrderRoute.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import cors from "cors";
import colors from "colors";

dotenv.config();

ConnectDB();

const port = process.env.PORT;

const app = express();
// app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// const cors = require('cors');

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Cookie parser middleware
app.use(cookieParser());

//PROSHOP
// app.use("/", orderRoute);
app.use("/api", productRoutes);
app.use("/api", userRoutes);
app.use("/api", orderRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

app.use(errorHandler);

app.listen(port, () => console.log("server is listening to port: ", port));
