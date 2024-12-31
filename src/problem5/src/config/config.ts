import dotenv from "dotenv";
import path from "path";

// Load .env file from the root directory
const result = dotenv.config({ path: path.join(__dirname, "../../.env") });

if (result.error) {
  console.error("Error loading .env file:", result.error);
}

console.log("Environment variables loaded:", {
  mongoUri: process.env.MONGO_URI ? "Set" : "Not set",
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
});

export const config = {
  port: parseInt(process.env.PORT || "5000", 10),
  mongoUri: process.env.MONGO_URI,
  env: process.env.NODE_ENV || "development",
  corsOrigin: process.env.CORS_ORIGIN || "*",
};
