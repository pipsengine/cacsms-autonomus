import type { DecisionScores, PolicyThresholds } from "../../packages/types/src";

export type DecisionResult = {
  approvedForPolicyValidation: boolean;
  score: DecisionScores;
  reasons: string[];
};

export function evaluateDecision(score: DecisionScores, policy: PolicyThresholds): DecisionResult {
  const reasons = [
    score.brandFit >= policy.brandFitMinimum ? null : "Brand fit below threshold.",
    score.contentQuality >= policy.contentQualityMinimum ? null : "Content quality below threshold.",
    score.compliance >= policy.complianceMinimum ? null : "Compliance below threshold.",
    score.audienceRelevance >= policy.audienceRelevanceMinimum ? null : "Audience relevance below threshold.",
    score.businessGoalAlignment >= policy.businessGoalAlignmentMinimum ? null : "Business goal alignment below threshold.",
    score.risk <= policy.riskMaximum ? null : "Risk exceeds threshold.",
    score.confidence >= policy.confidenceMinimum ? null : "Confidence below threshold.",
  ].filter((reason): reason is string => Boolean(reason));

  return {
    approvedForPolicyValidation: reasons.length === 0,
    score,
    reasons,
  };
}
