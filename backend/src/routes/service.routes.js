import express from "express";
import { bookService } from "../controllers/service.controller.js";

const router = express.Router();

/**
 * @route   POST /api/v1/service/book
 * @desc    Book service based on predicted severity
 * @access  Public
 */
router.post("/service/book", bookService);

export default router;
