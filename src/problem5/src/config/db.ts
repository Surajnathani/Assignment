import mongoose from "mongoose";
import { config } from "./config";

export const connectDB = async () => {
  try {
    console.log("Config values:", {
      mongoUri: config.mongoUri ? "Set" : "Not set",
      port: config.port,
      env: config.env,
    });

    if (!config.mongoUri) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    console.log("Attempting to connect to MongoDB...");
    console.log(
      "Connection string:",
      config.mongoUri.replace(/:[^:]*@/, ":****@")
    ); // Hide password in logs

    const conn = await mongoose.connect(config.mongoUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error("MongoDB connection error:");
    console.error(error);
    process.exit(1);
  }
};
