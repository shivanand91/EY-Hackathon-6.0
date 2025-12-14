import mongoose from "mongoose";

const DiagnosisSchema = new mongoose.Schema(
  {
    vehicleId: {
      type: String,
      required: true,
      index: true
    },

    issues: {
      type: [String],
      default: []
    },

    severity: {
      type: String,
      enum: ["none", "low", "medium", "high"],
      required: true
    },

    explanation: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Diagnosis", DiagnosisSchema);
