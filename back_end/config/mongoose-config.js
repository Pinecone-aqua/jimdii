import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("error");
  });

export default mongoose.connection;
