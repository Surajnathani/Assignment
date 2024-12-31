import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import resourceRoute from "./routes/resourceRoute";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/resources", resourceRoute);

export default app;
