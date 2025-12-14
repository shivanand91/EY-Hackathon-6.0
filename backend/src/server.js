import app from "./app.js";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";


const startServer = async () => {
  try {
    await connectDB();

    app.listen(ENV.PORT, () => {
      console.log(
        `🚀 Local server running on http://localhost:${ENV.PORT} (${ENV.NODE_ENV})`
      );
    });
  
  } catch (error) {
    console.error("❌ Failed to start local server");
    console.error(error);
    process.exit(1);
  }
};

startServer();
