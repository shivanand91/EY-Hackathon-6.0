import ServiceBooking from "../models/ServiceBooking.js";
import { recommendSlot } from "../services/scheduler.service.js";

export const bookService = async (req, res) => {
  try {
    const { vehicleId, severity } = req.body;

    if (!vehicleId || !severity) {
      return res.status(400).json({
        success: false,
        message: "vehicleId and severity are required"
      });
    }

    const slot = recommendSlot(severity);

    const booking = await ServiceBooking.create({
      vehicleId,
      severity,
      slot,
      workshop: "EY Partner Workshop - Lucknow"
    });

    return res.status(201).json({
      success: true,
      data: booking
    });
  } catch (error) {
    console.error("Service Booking Error:", error);
    return res.status(500).json({
      success: false,
      message: "Service booking failed"
    });
  }
};
