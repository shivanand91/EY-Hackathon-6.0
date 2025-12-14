import { recommendSlot } from "../services/scheduler.service.js";

export default class ServiceAgent {
  plan(severity) {
    return {
      recommendedSlot: recommendSlot(severity),
      workshop: "EY Partner Workshop - Lucknow"
    };
  }
}
