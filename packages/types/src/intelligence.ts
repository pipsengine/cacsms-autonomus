export const intelligenceEngineKeys = [
  "language-intelligence",
  "vision-intelligence",
  "video-intelligence",
  "audio-intelligence",
  "voice-intelligence",
  "creative-intelligence",
  "knowledge-intelligence",
  "memory-intelligence",
  "decision-intelligence",
  "workflow-intelligence",
  "planning-intelligence",
  "reasoning-intelligence",
  "prediction-intelligence",
  "analytics-intelligence",
  "business-intelligence",
  "trading-intelligence",
  "learning-intelligence",
  "optimization-intelligence",
  "agent-intelligence",
  "security-intelligence",
] as const;

export const intelligenceCapabilities = [
  "initialize",
  "observe",
  "understand",
  "reason",
  "plan",
  "execute",
  "evaluate",
  "learn",
  "improve",
  "store-memory",
  "retrieve-memory",
  "self-diagnose",
  "self-optimize",
] as const;

export const intelligenceRuntimeResponsibilities = [
  "route-requests-internally",
  "select-brain-engine",
  "coordinate-engine-collaboration",
  "manage-execution-lifecycle",
  "collect-execution-telemetry",
  "support-internal-model-deployment",
  "support-experimentation",
  "handle-engine-version-failover",
  "manage-model-versioning",
  "manage-capability-registry",
] as const;

export const modelRegistryResponsibilities = [
  "register-intelligence-engines",
  "manage-engine-versions",
  "manage-capabilities",
  "manage-benchmarks",
  "manage-deployments",
  "manage-testing",
  "manage-health",
  "manage-execution-statistics",
] as const;

export const datasetDomains = [
  "business-datasets",
  "brand-datasets",
  "creative-datasets",
  "image-datasets",
  "video-datasets",
  "audio-datasets",
  "knowledge-datasets",
  "workflow-datasets",
  "agent-datasets",
  "training-datasets",
  "evaluation-datasets",
] as const;

export const datasetGovernanceCapabilities = [
  "versioning",
  "tagging",
  "lineage",
  "quality-scoring",
  "approval",
  "retention",
  "governance",
] as const;

export const trainingCenterCapabilities = [
  "dataset-management",
  "training-jobs",
  "fine-tuning",
  "evaluation",
  "benchmarking",
  "validation",
  "deployment",
  "rollback",
  "experiment-tracking",
  "performance-comparison",
] as const;

export const intelligenceWorkflow = [
  "business-goal",
  "research",
  "planning-intelligence",
  "reasoning-intelligence",
  "creative-intelligence",
  "vision-intelligence",
  "decision-intelligence",
  "learning-intelligence",
  "publishing",
  "analytics",
  "continuous-learning",
] as const;

export type IntelligenceEngineKey = (typeof intelligenceEngineKeys)[number];
export type IntelligenceCapability = (typeof intelligenceCapabilities)[number];
export type DatasetDomain = (typeof datasetDomains)[number];

export type IntelligenceRequest<TInput = unknown> = {
  id: string;
  engine: IntelligenceEngineKey;
  capability: IntelligenceCapability;
  input: TInput;
  context?: Record<string, unknown>;
};

export type IntelligenceResponse<TOutput = unknown> = {
  requestId: string;
  engine: IntelligenceEngineKey;
  engineVersion: string;
  confidence: number;
  output: TOutput;
  telemetry: {
    startedAt: string;
    completedAt: string;
    executionMs: number;
  };
};

export type IntelligenceEngine<TInput = unknown, TOutput = unknown> = {
  key: IntelligenceEngineKey;
  version: string;
  capabilities: readonly IntelligenceCapability[];
  initialize: () => Promise<void>;
  observe: (input: TInput) => Promise<TOutput>;
  understand: (input: TInput) => Promise<TOutput>;
  reason: (input: TInput) => Promise<TOutput>;
  plan: (input: TInput) => Promise<TOutput>;
  execute: (input: TInput) => Promise<TOutput>;
  evaluate: (input: TInput) => Promise<TOutput>;
  learn: (input: TInput) => Promise<TOutput>;
  improve: (input: TInput) => Promise<TOutput>;
  storeMemory: (input: TInput) => Promise<TOutput>;
  retrieveMemory: (input: TInput) => Promise<TOutput>;
  selfDiagnose: () => Promise<TOutput>;
  selfOptimize: () => Promise<TOutput>;
};
