import DataAgent from "./DataAgent.js";
import DiagnosisAgent from "./DiagnosisAgent.js";
import ExplanationAgent from "./ExplanationAgent.js";
import ServiceAgent from "./ServiceAgent.js";
import ManufacturingAgent from "./ManufacturingAgent.js";

class MasterAgent {
  constructor() {
    this.dataAgent = new DataAgent();
    this.diagnosisAgent = new DiagnosisAgent();
    this.explanationAgent = new ExplanationAgent();
    this.serviceAgent = new ServiceAgent();
    this.manufacturingAgent = new ManufacturingAgent();
  }

  async run(rawReading) {
    // Step 1: Clean & normalize data
    const data = this.dataAgent.process(rawReading);

    // Step 2: Diagnose issues
    const diagnosis = this.diagnosisAgent.diagnose(data);

    // Step 3: Explain issues using LLM
    const explanation = await this.explanationAgent.explain(data, diagnosis);

    // Step 4: Auto-plan service
    const servicePlan = this.serviceAgent.plan(diagnosis.severity);

    // Step 5: Log for OEM insights
    this.manufacturingAgent.logIssues(diagnosis.issues);

    return {
      vehicleId: data.vehicleId,
      issues: diagnosis.issues,
      severity: diagnosis.severity,
      explanation,
      recommendedSlot: servicePlan.recommendedSlot,
      workshop: servicePlan.workshop
    };
  }

  getOEMInsights() {
    return this.manufacturingAgent.getInsights();
  }
}

export default new MasterAgent();
