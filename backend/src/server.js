import app from "./app.js";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

/**
 * -------------------------
 * Start Server
 * -------------------------
 */
const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Start Express server
    app.listen(ENV.PORT, () => {
      console.log(
        `🚀 Server running in ${ENV.NODE_ENV} mode on http://localhost:${ENV.PORT}`
      );
    });
  } catch (error) {
    console.error("❌ Failed to start server");
    console.error(error);
    process.exit(1);
  }
};

startServer();
