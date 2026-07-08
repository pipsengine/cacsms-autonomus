export const autonomousDashboardMetrics = [
  "currentAutonomyLevel",
  "activeAgents",
  "runningWorkflows",
  "successRate",
  "failureRate",
  "decisionsToday",
  "scheduledActions",
  "publishedActions",
  "learningProgress",
  "riskScore",
  "systemConfidence",
] as const;

export const autonomousDashboardPanels = [
  "currentGoal",
  "currentPlan",
  "runningAgents",
  "runningWorkflows",
  "todaysDecisions",
  "scheduledExecutions",
  "publishedActions",
  "learningInsights",
  "exceptions",
  "systemHealth",
  "autonomyScore",
  "businessGoalProgress",
] as const;
