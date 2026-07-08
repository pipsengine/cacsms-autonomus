export const autonomousLifecycle = [
  "observe",
  "understand",
  "research",
  "reason",
  "plan",
  "predict",
  "generate",
  "review",
  "score",
  "decision",
  "policy-validation",
  "auto-approval",
  "schedule",
  "execute",
  "monitor",
  "measure",
  "learn",
  "optimize",
  "repeat",
] as const;

export const autonomousWorkflowStates = [
  "observed",
  "understood",
  "researched",
  "planned",
  "predicted",
  "generated",
  "reviewed",
  "scored",
  "policy-validated",
  "approved",
  "scheduled",
  "executing",
  "published",
  "monitoring",
  "learning",
  "optimized",
  "completed",
  "exception",
  "blocked",
  "failed",
  "cancelled",
] as const;

export const autonomyLevels = [
  { level: 0, key: "manual", label: "Manual Mode", humanRole: "System only provides suggestions." },
  { level: 1, key: "assisted", label: "Assisted Mode", humanRole: "System creates drafts; user executes." },
  { level: 2, key: "semi-autonomous", label: "Semi Autonomous", humanRole: "System creates and schedules; human executes." },
  { level: 3, key: "policy-driven", label: "Policy Driven", humanRole: "System executes if policies pass." },
  { level: 4, key: "highly-autonomous", label: "Highly Autonomous", humanRole: "System completes workflows and escalates medium or high risk." },
  { level: 5, key: "fully-autonomous", label: "Fully Autonomous", humanRole: "System observes, plans, creates, reviews, scores, approves, executes, monitors, and learns." },
] as const;

export const decisionScoreDimensions = [
  "brandFit",
  "contentQuality",
  "compliance",
  "audienceRelevance",
  "businessGoalAlignment",
  "risk",
  "confidence",
  "historicalPerformance",
  "probabilityOfSuccess",
] as const;

export const autonomousAgents = [
  "executive-agent",
  "content-agent",
  "research-agent",
  "brand-agent",
  "compliance-agent",
  "social-agent",
  "scheduler-agent",
  "analytics-agent",
  "marketing-agent",
  "sales-agent",
  "workflow-agent",
  "knowledge-agent",
  "integration-agent",
  "notification-agent",
  "planning-agent",
  "editor-agent",
  "publishing-agent",
  "learning-agent",
] as const;

export const monitoringTargets = [
  "publishing",
  "engagement",
  "audience-growth",
  "competitors",
  "api-health",
  "oauth-tokens",
  "agent-health",
  "workflow-failures",
  "performance",
  "business-goals",
] as const;

export const learningInputs = [
  "engagement",
  "conversions",
  "failures",
  "approvals",
  "rejected-actions",
  "publishing-times",
  "audience-behaviour",
  "platform-analytics",
  "campaign-performance",
] as const;

export type AutonomousLifecycleStep = (typeof autonomousLifecycle)[number];
export type AutonomousWorkflowState = (typeof autonomousWorkflowStates)[number];
export type AutonomyLevel = (typeof autonomyLevels)[number]["level"];
export type DecisionScoreDimension = (typeof decisionScoreDimensions)[number];
export type AutonomousAgentKey = (typeof autonomousAgents)[number];

export type DecisionScores = Record<DecisionScoreDimension, number>;

export type PolicyThresholds = {
  brandFitMinimum: number;
  contentQualityMinimum: number;
  complianceMinimum: number;
  audienceRelevanceMinimum: number;
  businessGoalAlignmentMinimum: number;
  riskMaximum: number;
  confidenceMinimum: number;
  retryLimit: number;
};

export type AutonomousException = {
  id: string;
  workflowId: string;
  reason: string;
  rootCause: string;
  suggestedFix: string;
  automaticRetryStrategy: string;
  escalationPolicy: string;
  state: Extract<AutonomousWorkflowState, "exception" | "blocked" | "failed">;
};
