import MasterAgent from "../agents/MasterAgent.js";
import VehicleReading from "../models/VehicleReading.js";
import Diagnosis from "../models/Diagnosis.js";

export const runDiagnosis = async (req, res) => {
  try {
    const payload = req.body;

    // Run full agentic pipeline
    const result = await MasterAgent.run(payload);

    // Save raw vehicle reading
    await VehicleReading.create({
      vehicleId: result.vehicleId,
      engineTemp: payload.engine_temp,
      batteryVoltage: payload.battery_voltage,
      tyrePressure: payload.tyre_pressure,
      rpm: payload.rpm,
      speed: payload.speed
    });

    // Save diagnosis result
    await Diagnosis.create({
      vehicleId: result.vehicleId,
      issues: result.issues,
      severity: result.severity,
      explanation: result.explanation
    });

    return res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error("Diagnosis Error:", error);
    return res.status(500).json({
      success: false,
      message: "Diagnosis failed"
    });
  }
};
