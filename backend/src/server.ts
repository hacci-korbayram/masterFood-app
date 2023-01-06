import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import foodRouter from "./routers/food.router";
import userRouter from "./routers/user.router";
import orderRouter from "./routers/order.router";
import { dbConnect } from "./configs/database.config";

dbConnect();
const app = express();
app.use(express.json());
//localhost:4200
//localhost:5000
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);
//frontend food servis look at
app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

const port = 5000;
app.listen(port, () => {
  console.log("website served on http://localhost:" + port);
});
