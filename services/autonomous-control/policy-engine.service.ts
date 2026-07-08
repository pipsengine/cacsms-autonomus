import { defaultPolicyThresholds } from "../../packages/config/src";
import type { DecisionScores, PolicyThresholds } from "../../packages/types/src";
import { evaluateDecision } from "./decision-engine.service";

export type PolicyDecision = "auto-approved" | "self-correction-required" | "exception-required";

export function evaluatePolicy(score: DecisionScores, policy: PolicyThresholds = defaultPolicyThresholds): PolicyDecision {
  const decision = evaluateDecision(score, policy);

  if (decision.approvedForPolicyValidation) {
    return "auto-approved";
  }

  return score.risk > policy.riskMaximum * 2 ? "exception-required" : "self-correction-required";
}
