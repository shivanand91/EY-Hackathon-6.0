export default class ManufacturingAgent {
  constructor() {
    this.issueFrequency = {};
  }

  logIssues(issues) {
    issues.forEach(issue => {
      this.issueFrequency[issue] = (this.issueFrequency[issue] || 0) + 1;
    });
  }

  getInsights() {
    return this.issueFrequency;
  }
}
