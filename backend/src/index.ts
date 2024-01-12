import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users.routes";

mongoose.connect(process.env.MONGO_URI as string).then(() => {
  console.log("connected to database");
});

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/api/users", userRoutes);

app.listen(3000, () => {
  console.log(`server is running on port 3000`);
});
