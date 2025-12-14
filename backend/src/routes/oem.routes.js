import express from "express";
import { getOEMInsights } from "../controllers/oem.controller.js";

const router = express.Router();

/**
 * @route   GET /api/v1/oem/insights
 * @desc    Get aggregated issue insights for OEMs
 * @access  Restricted (demo open)
 */
router.get("/oem/insights", getOEMInsights);

export default router;
