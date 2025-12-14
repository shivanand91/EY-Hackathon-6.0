/**
 * Recommend a service slot based on severity.
 * High   → Immediate (within hours)
 * Medium → Next day
 * Low    → Few days later
 */
export function recommendSlot(severity) {
  const now = new Date();
  const slot = new Date(now);

  switch (severity) {
    case "high":
      slot.setHours(slot.getHours() + 4);
      break;

    case "medium":
      slot.setDate(slot.getDate() + 1);
      break;

    case "low":
      slot.setDate(slot.getDate() + 3);
      break;

    default:
      slot.setDate(slot.getDate() + 7);
  }

  return slot;
}
