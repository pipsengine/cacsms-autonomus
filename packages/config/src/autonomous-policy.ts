import type { PolicyThresholds } from "../../types/src";

export const defaultPolicyThresholds = {
  brandFitMinimum: 90,
  contentQualityMinimum: 85,
  complianceMinimum: 95,
  audienceRelevanceMinimum: 80,
  businessGoalAlignmentMinimum: 85,
  riskMaximum: 15,
  confidenceMinimum: 90,
  retryLimit: 3,
} as const satisfies PolicyThresholds;

export const autonomousOperatingLoop = {
  targetLevel: 5,
  requiresHumanInputFor: [
    "initial-onboarding",
    "workspace-creation",
    "external-account-connection",
    "business-objective-definition",
    "policy-definition",
    "emergency-override",
    "long-term-strategy-change",
  ],
  mustNotAskForNextAction: true,
} as const;
