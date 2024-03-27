import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/errorHandler.js";
import ConnectDB from "./config/db.js";
// import orderRoute from "./routes/techOrderRoute.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import cors from "cors";
import colors from "colors";

dotenv.config();

ConnectDB();

const port = process.env.PORT;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const app = express();
app.use("/uploads", express.static("uploads"));
app.use("/images", express.static("images"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin:"https://tech-trove-ecru.vercel.app", credentials: true }));
// origin: "https://tech-trove-ecru.vercel.app"
// Cookie parser middleware
app.use(cookieParser());

// const buildPath = path.join(__dirname, "../frontend/dist");
// app.use(express.static(buildPath));
//PROSHOP
// app.use("/", orderRoute);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

// Catch-all handler to serve index.html for any other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.use(errorHandler);

app.listen(port, () => console.log("server is listening to port: ", port));

// app.get("/api", (req, res) => {
//   console.log("Request received for the homepage");
//   res.send("API is running...");
// });

// const __dirname = path.resolve();
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// if (process.env.NODE_ENV === 'production') {
//   const __dirname = path.resolve();
//   app.use('/uploads', express.static('/var/data/uploads'));
//   app.use(express.static(path.join(__dirname, '/frontend/dist')));

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
//   );
// } else {
//   const __dirname = path.resolve();
//   app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
//   app.get('/', (req, res) => {
//     res.send('API is running....');
//   });
// }
