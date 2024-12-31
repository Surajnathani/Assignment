import app from "./app";
import { connectDB } from "./config/db";
import { config } from "./config/config";

const startServer = async () => {
  try {
    console.log("Starting server...");
    console.log("Environment:", process.env.NODE_ENV);

    // Connect to database
    await connectDB();

    const port = config.port;
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
