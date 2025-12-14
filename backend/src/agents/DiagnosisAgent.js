export default class DiagnosisAgent {
  diagnose(data) {
    const issues = [];

    if (data.engine_temp > 110) {
      issues.push("Engine overheating detected");
    }

    if (data.battery_voltage < 11.5) {
      issues.push("Low battery voltage");
    }

    if (data.tyre_pressure < 28) {
      issues.push("Low tyre pressure");
    }

    if (data.rpm > 6000 && data.speed < 20) {
      issues.push("Abnormal RPM behavior (possible clutch issue)");
    }

    let severity = "none";
    if (issues.length === 1) severity = "low";
    if (issues.length === 2) severity = "medium";
    if (issues.length >= 3) severity = "high";

    return {
      issues,
      severity
    };
  }
}
