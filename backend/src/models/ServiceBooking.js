import mongoose from "mongoose";

const ServiceBookingSchema = new mongoose.Schema(
  {
    vehicleId: {
      type: String,
      required: true,
      index: true
    },

    severity: {
      type: String,
      enum: ["low", "medium", "high"],
      required: true
    },

    slot: {
      type: Date,
      required: true
    },

    workshop: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["SCHEDULED", "COMPLETED", "CANCELLED"],
      default: "SCHEDULED"
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("ServiceBooking", ServiceBookingSchema);
