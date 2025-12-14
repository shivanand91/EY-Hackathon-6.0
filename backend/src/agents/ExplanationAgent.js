import { generateExplanation } from "../services/llm.service.js";

export default class ExplanationAgent {
  async explain(vehicleData, diagnosis) {
    if (diagnosis.issues.length === 0) {
      return "Your vehicle is operating normally. No immediate maintenance is required.";
    }

    const prompt = `
You are an automotive expert.
Explain the following vehicle issue to a non-technical user in simple language.

Vehicle Data:
Engine Temp: ${vehicleData.engine_temp}
Battery Voltage: ${vehicleData.battery_voltage}
Tyre Pressure: ${vehicleData.tyre_pressure}
RPM: ${vehicleData.rpm}
Speed: ${vehicleData.speed}

Detected Issues:
${diagnosis.issues.join(", ")}

Severity: ${diagnosis.severity}

Explain clearly what is happening and what the user should do next.
    `;

    return await generateExplanation(prompt);
  }
}
