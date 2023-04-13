import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./config/mongoose-config";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log("server running on:", port);
});
