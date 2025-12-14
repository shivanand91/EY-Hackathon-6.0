import mongoose from "mongoose";

const VehicleReadingSchema = new mongoose.Schema(
  {
    vehicleId: {
      type: String,
      required: true,
      index: true
    },

    engineTemp: {
      type: Number,
      required: true
    },

    batteryVoltage: {
      type: Number,
      required: true
    },

    tyrePressure: {
      type: Number,
      required: true
    },

    rpm: {
      type: Number,
      required: true
    },

    speed: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("VehicleReading", VehicleReadingSchema);
