import express from "express";
import cors from "cors";

import diagnosisRoutes from "./routes/diagnosis.routes.js";
import serviceRoutes from "./routes/service.routes.js";
import oemRoutes from "./routes/oem.routes.js";

const app = express();

/**
 * -------------------------
 * Global Middlewares
 * -------------------------
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * -------------------------
 * API Routes
 * -------------------------
 */
app.use("/api/v1", diagnosisRoutes);
app.use("/api/v1", serviceRoutes);
app.use("/api/v1", oemRoutes);

/**
 * -------------------------
 * Health Check
 * -------------------------
 */
app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "Agentic AI Predictive Maintenance Backend",
    version: "1.0.0"
  });
});

/**
 * -------------------------
 * Global Error Handler
 * -------------------------
 */
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);

  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });
});

export default app;
