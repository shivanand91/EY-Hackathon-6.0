import express from "express";
import { runDiagnosis } from "../controllers/diagnosis.controller.js";

const router = express.Router();

/**
 * @route   POST /api/v1/diagnose
 * @desc    Run agentic AI diagnosis on vehicle data
 * @access  Public (Hackathon demo)
 */
router.post("/diagnose", runDiagnosis);

export default router;
