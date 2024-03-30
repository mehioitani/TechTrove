import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/errorHandler.js";
import ConnectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import cors from "cors";
import colors from "colors";

dotenv.config();

ConnectDB();

const port = process.env.PORT;
const __dirname = path.resolve();
const app = express();
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.use("/uploads", express.static("uploads"));
app.use("/images", express.static("images"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "https://techtrove-9.onrender.com",

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
app.use("/api", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

// if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    console.log("Serving index.html for:", req.originalUrl);
    const indexPath = path.join(__dirname, "frontend", "dist", "index.html");
    console.log("Path to index.html:", indexPath);
    res.sendFile(indexPath);
  });
// }

//  if (process.env.NODE_ENV === 'production') {
//   const __dirname = path.resolve();
//   app.use('/uploads', express.static('/var/data/uploads'));
//   app.use(express.static(path.join(__dirname, '/frontend/build')));

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   );
// } else {
//   const __dirname = path.resolve();
//   app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
//   app.get('/', (req, res) => {
//     res.send('API is running....');
//   });
// }

// const __dirname = path.resolve();
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(errorHandler);

app.listen(port, () => console.log("server is listening to port: ", port));
