import express from "express";
import dotenv from "dotenv";
// import { errorHandler } from "./middlewares/errorHandler.js";
import ConnectDB from "./config/db.js";
// import orderRoute from "./routes/techOrderRoute.js";
import productRoutes from "./routes/productRoutes.js";
// import userRoute from "./routes/userRoute.js";
import cors from "cors";
import colors from "colors";

dotenv.config();

ConnectDB();

const port = process.env.PORT;

const app = express();
// app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//PROSHOP
// app.use("/", orderRoute);
app.use("/api", productRoutes);
// app.use("/", userRoute);

// app.use(errorHandler);

app.listen(port, () => console.log("server is listening to port: ", port));
