import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",            // allow all origins (hackathon safe)
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json());

// routes
import diagnosisRoutes from "./routes/diagnosis.routes.js";
import oemRoutes from "./routes/oem.routes.js";
import serviceRoutes from "./routes/service.routes.js";

app.use("/api/v1", diagnosisRoutes);
app.use("/api/v1", oemRoutes);
app.use("/api/v1", serviceRoutes);

export default app;
