import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "./config/config";
import resourceRoute from "./routes/resourceRoute";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

// Middleware
app.use(
  cors({
    origin: config.corsOrigin,
  })
);
app.use(bodyParser.json());

// Routes
app.use("/api/resources", resourceRoute);

// Error handling
app.use(errorHandler);

export default app;
