import type { AutonomousException } from "../../packages/types/src";

export const exceptionReasons = [
  "publishing-failed",
  "api-unavailable",
  "low-confidence",
  "risk-exceeded",
  "oauth-expired",
  "compliance-violation",
  "policy-conflict",
  "repeated-workflow-failure",
] as const;

export function createAutonomousException(input: Omit<AutonomousException, "state">): AutonomousException {
  return {
    ...input,
    state: "exception",
  };
}
