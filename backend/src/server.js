import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";
import orderRoutes from "./routes/order.routes.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:4242",
  credentials: true
}));

app.use(express.json());

// routes
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
