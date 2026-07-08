export type HealthState = "online" | "degraded" | "offline";

export class HealthManager {
  private readonly checks = new Map<string, { state: HealthState; message: string; checkedAt: string }>();

  record(key: string, state: HealthState, message: string) {
    const check = { state, message, checkedAt: new Date().toISOString() };
    this.checks.set(key, check);
    return check;
  }

  score() {
    const checks = [...this.checks.values()];
    if (checks.length === 0) return 100;
    const online = checks.filter((check) => check.state === "online").length;
    return Math.round((online / checks.length) * 100);
  }

  list() {
    return [...this.checks.entries()].map(([key, check]) => ({ key, ...check }));
  }
}
