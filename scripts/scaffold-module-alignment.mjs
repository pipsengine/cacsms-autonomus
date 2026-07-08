import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const modules = [
  ["dashboard", "Dashboard", ["Overview", "Activity Feed", "My Tasks", "Notifications", "Recent Activities", "Performance Snapshot", "Autonomous Recommendations", "System Health"]],
  ["workspace", "Workspace", ["My Workspace", "Organizations", "Companies", "Departments", "Teams", "Brands", "Clients", "Projects", "Campaigns", "Social Accounts", "Workspace Settings"]],
  ["brand-manager", "Brand Manager", ["Brand Profile", "Audience Profile", "Brand Voice", "Content Pillars", "Products & Services", "Case Studies", "Keywords", "Competitors", "Brand Goals", "Messaging Guidelines", "Brand Assets"]],
  ["content-platform", "Content Platform", ["Content Ideas", "Monthly Planner", "Weekly Planner", "Daily Planner", "Content Calendar", "Content Generator", "Content Editor", "AI Reviewer", "Social Preview", "Scheduled Posts", "Publishing Queue", "Content Library", "Templates", "Carousel Builder", "Video Script Writer", "Blog Writer", "Newsletter Writer", "Repurpose Content", "Content Archive"]],
  ["creative-studio", "Creative Studio", [
    ["Dashboard"],
    ["Creative Projects"],
    ["Creative Workspace"],
    ["Image Studio"],
    ["Video Studio", ["Dashboard", "Research", "Ideas", "Strategy", "Script Writer", "Script Reviewer", "Storyboard Builder", "Scene Planner", "Shot Planner", "Timeline", "Visual Planner", "Image Generation", "Video Generation", "Voice Generation", "Narration", "Music", "Animation", "Editing", "Subtitle Generator", "Caption Generator", "Thumbnail Studio", "Publishing", "Analytics", "Version History", "Templates", "Archive", "Asset Library"]],
    ["Audio Studio"],
    ["Podcast Studio"],
    ["Presentation Studio"],
    ["Document Studio"],
    ["Design Studio"],
    ["Creative Templates"],
    ["Brand Asset Library"],
    ["Publishing Center"],
    ["Creative Analytics"],
    ["Learning Center"],
    ["Creative Settings"],
  ]],
  ["research-center", "Research Center", ["Topic Research", "Trend Discovery", "Competitor Research", "Industry Insights", "Keyword Research", "News Monitor", "Audience Research", "Hashtag Research", "Market Research", "Research Library", "Saved Insights"]],
  ["campaign-manager", "Campaign Manager", ["Campaigns", "Campaign Goals", "Campaign Strategy", "Campaign Calendar", "Campaign Assets", "Campaign Tasks", "Campaign Content", "Campaign Approvals", "Campaign Performance", "Campaign Reports"]],
  ["approval-center", "Approval Center", ["Drafts", "AI Review Queue", "Pending Approval", "Revision Requests", "Approved Content", "Rejected Content", "Approval Workflow", "Review Comments", "Version History", "Approval Audit Trail"]],
  ["social-publishing", "Social Publishing", ["Connected Accounts", "LinkedIn", "Facebook", "Instagram", "X / Twitter", "YouTube", "TikTok", "Threads", "Blog / Website", "Email Newsletter", "Publishing Queue", "Scheduled Posts", "Published Posts", "Failed Posts", "Reconnect Accounts", "Publishing Logs"]],
  ["demo-platforms", "Demo Platforms", ["Demo LinkedIn", "Demo Facebook", "Demo Instagram", "Demo X / Twitter", "Demo YouTube", "Demo Blog", "Feed Preview", "Desktop Preview", "Mobile Preview", "Engagement Simulator", "Comment Simulator", "Share Preview"]],
  ["autonomous-agents", "Autonomous Agents", ["Agent Dashboard", "Executive Agent", "Content Agent", "Research Agent", "Brand Agent", "Social Media Agent", "Editor Agent", "Compliance Agent", "Scheduler Agent", "Analytics Agent", "Engagement Agent", "Sales Agent", "Workflow Agent", "Agent Marketplace", "Agent Memory", "Agent Permissions", "Agent Activity Logs", "Agent Performance"]],
  ["autonomous-control", "Autonomous Control", ["Autonomy Dashboard", "Autonomy Level", "Decision Rules", "Risk Policies", "Auto-Approval Rules", "Publishing Guardrails", "Exception Queue", "Failsafe Controls", "Human Override", "Execution Logs", "Learning Settings"]],
  ["knowledge-base", "Knowledge Base", ["Business Profile", "Documents", "Uploaded Files", "Prompt Library", "Memory Center", "Content History", "Case Studies", "Products & Services", "Approved Phrases", "Restricted Phrases", "Saved Insights", "Knowledge Search", "Knowledge Tags", "Knowledge Settings"]],
  ["workflow-engine", "Workflow Engine", ["Workflow Dashboard", "Workflow Builder", "Approval Workflows", "Automation Rules", "Review Queue", "Task Assignment", "Scheduled Tasks", "Notifications", "Escalations", "Execution History", "Version Control", "Audit Trail", "Workflow Templates"]],
  ["analytics-center", "Analytics Center", ["Analytics Dashboard", "Content Analytics", "Social Analytics", "Platform Analytics", "Audience Growth", "Engagement Reports", "Campaign Performance", "Lead Analytics", "Best Performing Topics", "Best Performing Formats", "Best Posting Times", "AI Recommendations", "Reports", "Export Center"]],
  ["integration-hub", "Integration Hub", ["Integration Dashboard", "Social Integrations", "LinkedIn", "Facebook", "Instagram", "X / Twitter", "YouTube", "TikTok", "Threads", "Email Integrations", "Gmail", "Outlook", "Calendar Integrations", "Google Calendar", "Microsoft Calendar", "Cloud Storage", "Google Drive", "OneDrive", "Dropbox", "Communication", "Slack", "Microsoft Teams", "WhatsApp Business", "Business Systems", "CRM", "ERP", "CMS / Website", "Payment Integrations", "Paystack", "Flutterwave", "Stripe", "SMS Gateway", "API Keys", "Webhooks", "OAuth Connections", "Integration Logs"]],
  ["notification-center", "Notification Center", ["All Notifications", "Task Notifications", "Approval Notifications", "Publishing Alerts", "Integration Alerts", "Agent Alerts", "System Alerts", "Notification Settings"]],
  ["user-administration", "User Administration", ["Users", "User Profiles", "Teams", "Organizations", "Workspaces", "Roles", "Permissions", "Access Control", "Subscription Plans", "Billing", "Invoices", "Usage Limits", "Audit Logs", "Activity Logs"]],
  ["security-compliance", "Security & Compliance", ["Login Security", "Multi-Factor Authentication", "OAuth Tokens", "API Security", "Data Privacy", "Content Moderation", "Compliance Rules", "Tenant Isolation", "Backup & Recovery", "Access Logs", "Security Audit Trail", "Risk Alerts"]],
  ["settings", "Settings", ["General Settings", "Workspace Settings", "Brand Settings", "AI Settings", "Agent Settings", "Publishing Settings", "Notification Settings", "Appearance", "Language", "Time Zone", "Backup Settings", "System Preferences"]],
];

const moduleSubdirs = [
  "pages",
  "components",
  "forms",
  "tables",
  "cards",
  "dialogs",
  "hooks",
  "api",
  "services",
  "schemas",
  "types",
  "constants",
  "utils",
  "permissions",
  "workflows",
  "tests",
];

const packages = ["ui", "auth", "permissions", "config", "database", "logger", "types", "utils", "brain"];

const moduleIcons = {
  "dashboard": "LayoutDashboard",
  "workspace": "BriefcaseBusiness",
  "brand-manager": "BadgeCheck",
  "content-platform": "FileText",
  "creative-studio": "Palette",
  "research-center": "Search",
  "campaign-manager": "Megaphone",
  "approval-center": "CircleCheckBig",
  "social-publishing": "Send",
  "demo-platforms": "MonitorSmartphone",
  "autonomous-agents": "Bot",
  "autonomous-control": "SlidersHorizontal",
  "knowledge-base": "BookOpen",
  "workflow-engine": "Workflow",
  "analytics-center": "ChartNoAxesCombined",
  "integration-hub": "Cable",
  "notification-center": "Bell",
  "user-administration": "Users",
  "security-compliance": "ShieldCheck",
  "settings": "Settings",
};

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\//g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function pascalCase(value) {
  return slugify(value)
    .split("-")
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join("");
}

function ensureDir(path) {
  mkdirSync(path, { recursive: true });
}

function writeFile(path, content) {
  ensureDir(dirname(path));
  writeFileSync(path, content);
}

function visibilityRules(permission) {
  return {
    roles: ["owner", "admin", "member"],
    permissions: [permission],
  };
}

function normalizeChildren(moduleKey, moduleLabel, children) {
  return children.map((child, index) => {
    const [label, nested = []] = Array.isArray(child) ? child : [child, []];
    const key = slugify(label);
    const permission = `${moduleKey}.${key}.view`;
    return {
      key,
      label,
      icon: "PanelRightOpen",
      route: `/${moduleKey}/${key}`,
      permission,
      description: `${label} workspace for the ${moduleLabel} module.`,
      featureFlag: null,
      status: "active",
      order: index + 1,
      visibilityRules: visibilityRules(permission),
      children: nested.map((nestedLabel, nestedIndex) => {
        const nestedKey = slugify(nestedLabel);
        const nestedPermission = `${moduleKey}.${key}.${nestedKey}.view`;
        return {
          key: nestedKey,
          label: nestedLabel,
          icon: "PanelRightOpen",
          route: `/${moduleKey}/${key}/${nestedKey}`,
          permission: nestedPermission,
          description: `${nestedLabel} page under ${label} in the ${moduleLabel} module.`,
          featureFlag: null,
          status: "active",
          order: nestedIndex + 1,
          visibilityRules: visibilityRules(nestedPermission),
        };
      }),
    };
  });
}

const registry = modules.map(([key, label, children], index) => {
  const permission = `${key}.view`;

  return {
    key,
    label,
    icon: moduleIcons[key],
    route: `/${key}`,
    permission,
    description: `${label} module for CACSMS Autonomous.`,
    featureFlag: null,
    status: "active",
    order: index + 1,
    visibilityRules: visibilityRules(permission),
    children: normalizeChildren(key, label, children),
  };
});

const registryTs = `export type ModuleRegistryItem = {
  key: string;
  label: string;
  icon: string;
  route: string;
  permission: string;
  description: string;
  featureFlag: string | null;
  status: "active" | "beta" | "planned" | "disabled";
  order: number;
  visibilityRules: {
    roles: readonly string[];
    permissions: readonly string[];
  };
  children?: readonly ModuleRegistryItem[];
};

export const MODULE_REGISTRY = ${JSON.stringify(registry, null, 2)} as const satisfies readonly ModuleRegistryItem[];

export type ModuleKey = (typeof MODULE_REGISTRY)[number]["key"];

export function getSidebarItems() {
  return MODULE_REGISTRY;
}

export function getRouteMap() {
  return MODULE_REGISTRY.flatMap((module) => [
    {
      key: module.key,
      label: module.label,
      route: module.route,
      permission: module.permission,
      icon: module.icon,
      description: module.description,
      featureFlag: module.featureFlag,
      status: module.status,
      order: module.order,
      visibilityRules: module.visibilityRules,
    },
    ...(module.children ?? []).flatMap((child) => [
      {
        key: child.key,
        label: child.label,
        route: child.route,
        permission: child.permission,
        icon: child.icon,
        description: child.description,
        featureFlag: child.featureFlag,
        status: child.status,
        order: child.order,
        visibilityRules: child.visibilityRules,
      },
      ...(child.children ?? []).map((nestedChild) => ({
        key: nestedChild.key,
        label: nestedChild.label,
        route: nestedChild.route,
        permission: nestedChild.permission,
        icon: nestedChild.icon,
        description: nestedChild.description,
        featureFlag: nestedChild.featureFlag,
        status: nestedChild.status,
        order: nestedChild.order,
        visibilityRules: nestedChild.visibilityRules,
      })),
    ]),
  ]);
}

export function getPermissionMap() {
  return getRouteMap().map(({ key, label, permission, route }) => ({
    key,
    label,
    permission,
    route,
  }));
}

export function getBreadcrumbs(route: string) {
  const breadcrumbs = [];

  for (const module of MODULE_REGISTRY) {
    if (route === module.route || route.startsWith(\`\${module.route}/\`)) {
      breadcrumbs.push({ label: module.label, route: module.route });

      for (const child of module.children ?? []) {
        if (route === child.route || route.startsWith(\`\${child.route}/\`)) {
          breadcrumbs.push({ label: child.label, route: child.route });

          for (const nestedChild of child.children ?? []) {
            if (route === nestedChild.route) {
              breadcrumbs.push({ label: nestedChild.label, route: nestedChild.route });
            }
          }
        }
      }
    }
  }

  return breadcrumbs;
}
`;

writeFile(join("packages", "config", "src", "module-registry.ts"), registryTs);
writeFile(join("packages", "config", "src", "index.ts"), `export * from "./module-registry";\n`);

for (const pkg of packages) {
  writeFile(join("packages", pkg, "src", "index.ts"), `export const packageName = "${pkg}";\n`);
}

writeFile(
  join("packages", "types", "src", "autonomous.ts"),
  `export const autonomousLifecycle = [
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
`,
);

writeFile(
  join("packages", "types", "src", "creative-studio.ts"),
  `export const creativeLifecycle = [
  "business-objective",
  "research",
  "strategy",
  "planning",
  "content-creation",
  "creative-production",
  "review",
  "optimization",
  "publishing",
  "monitoring",
  "learning",
  "continuous-improvement",
] as const;

export const videoProductionPipeline = [
  "business-goal",
  "research",
  "audience-analysis",
  "strategy",
  "script",
  "review",
  "storyboard",
  "scene-planning",
  "asset-planning",
  "image-generation",
  "video-generation",
  "narration",
  "voice",
  "music",
  "editing",
  "branding",
  "subtitle-generation",
  "thumbnail",
  "seo",
  "platform-optimization",
  "policy-validation",
  "auto-approval",
  "scheduling",
  "publishing",
  "monitoring",
  "learning",
  "optimization",
] as const;

export const videoFormats = [
  "short-videos",
  "long-videos",
  "product-demonstrations",
  "training",
  "corporate-communication",
  "educational-content",
  "interviews",
  "webinars",
  "podcasts",
  "documentaries",
  "explainers",
  "news",
  "testimonials",
  "advertisements",
  "sales-videos",
  "customer-onboarding",
  "internal-communication",
  "executive-messages",
  "animated-videos",
  "motion-graphics",
  "screen-recordings",
  "presentation-videos",
] as const;

export const videoTemplates = [
  "talking-head",
  "corporate-presentation",
  "educational",
  "explainer",
  "product-demo",
  "news",
  "interview",
  "podcast",
  "social-media-reel",
  "youtube-tutorial",
  "marketing",
  "whiteboard",
  "infographic",
  "slideshow",
  "animated-presentation",
  "event-promotion",
  "company-introduction",
  "training-module",
] as const;

export const creativePublishingChannels = [
  "linkedin",
  "facebook",
  "instagram",
  "threads",
  "x",
  "tiktok",
  "youtube",
  "website",
  "blog",
  "email-newsletter",
  "podcast-platforms",
  "internal-portals",
  "future-integrations",
] as const;

export const creativeAgents = [
  "creative-director-agent",
  "business-strategy-agent",
  "script-agent",
  "research-agent",
  "trend-agent",
  "planning-agent",
  "content-agent",
  "script-writer-agent",
  "storyboard-agent",
  "scene-agent",
  "scene-director-agent",
  "visual-designer-agent",
  "image-agent",
  "video-agent",
  "voice-agent",
  "audio-agent",
  "music-agent",
  "animation-agent",
  "subtitle-agent",
  "thumbnail-agent",
  "seo-agent",
  "compliance-agent",
  "brand-agent",
  "publishing-agent",
  "analytics-agent",
  "learning-agent",
  "creative-learning-agent",
  "knowledge-agent",
  "workflow-agent",
  "quality-assurance-agent",
  "creative-qa-agent",
  "executive-agent",
] as const;

export const creativeDecisionDimensions = [
  "brandFit",
  "brandAlignment",
  "businessAlignment",
  "compliance",
  "quality",
  "risk",
  "platformSuitability",
  "audienceFit",
  "predictedEngagement",
  "predictedRoi",
  "confidence",
  "historicalSuccess",
  "duplicateDetection",
  "trendAlignment",
  "publishingWindow",
] as const;

export const creativeMemoryDomains = [
  "audience",
  "brand",
  "visual-identity",
  "writing-style",
  "voice",
  "successful-campaigns",
  "failed-campaigns",
  "preferred-colors",
  "preferred-layouts",
  "preferred-music",
  "preferred-thumbnails",
  "previous-productions",
  "uploaded-assets",
  "business-knowledge",
] as const;

export const creativeTechnicalCapabilities = [
  "native-intelligence-runtime",
  "internal-engine-versioning",
  "capability-registry",
  "distributed-rendering",
  "background-processing",
  "job-queues",
  "parallel-production",
  "asset-caching",
  "version-control",
  "gpu-acceleration",
  "cloud-rendering",
  "high-availability",
  "scalable-storage",
  "enterprise-security",
  "audit-logging",
  "full-api-support",
  "microservice-ready-architecture",
  "plugin-architecture",
] as const;

export type CreativeLifecycleStep = (typeof creativeLifecycle)[number];
export type VideoProductionPipelineStep = (typeof videoProductionPipeline)[number];
export type CreativeAgentKey = (typeof creativeAgents)[number];
export type CreativeDecisionDimension = (typeof creativeDecisionDimensions)[number];
export type CreativeDecisionScores = Record<CreativeDecisionDimension, number>;
`,
);

writeFile(
  join("packages", "types", "src", "intelligence.ts"),
  `export const intelligenceEngineKeys = [
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
`,
);

writeFile(
  join("packages", "types", "src", "index.ts"),
  `export * from "./autonomous";
export * from "./creative-studio";
export * from "./intelligence";
`,
);

writeFile(
  join("packages", "config", "src", "autonomous-policy.ts"),
  `import type { PolicyThresholds } from "../../types/src";

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
`,
);

writeFile(
  join("packages", "config", "src", "index.ts"),
  `export * from "./module-registry";
export * from "./autonomous-policy";
`,
);

writeFile(
  join("packages", "brain", "src", "engines.ts"),
  `import type { IntelligenceEngineKey } from "../../types/src";

export const cacsmsBrainEngines = [
  { key: "language-intelligence", label: "Language Intelligence" },
  { key: "vision-intelligence", label: "Vision Intelligence" },
  { key: "video-intelligence", label: "Video Intelligence" },
  { key: "audio-intelligence", label: "Audio Intelligence" },
  { key: "voice-intelligence", label: "Voice Intelligence" },
  { key: "creative-intelligence", label: "Creative Intelligence" },
  { key: "knowledge-intelligence", label: "Knowledge Intelligence" },
  { key: "memory-intelligence", label: "Memory Intelligence" },
  { key: "decision-intelligence", label: "Decision Intelligence" },
  { key: "workflow-intelligence", label: "Workflow Intelligence" },
  { key: "planning-intelligence", label: "Planning Intelligence" },
  { key: "reasoning-intelligence", label: "Reasoning Intelligence" },
  { key: "prediction-intelligence", label: "Prediction Intelligence" },
  { key: "analytics-intelligence", label: "Analytics Intelligence" },
  { key: "business-intelligence", label: "Business Intelligence" },
  { key: "trading-intelligence", label: "Trading Intelligence" },
  { key: "learning-intelligence", label: "Learning Intelligence" },
  { key: "optimization-intelligence", label: "Optimization Intelligence" },
  { key: "agent-intelligence", label: "Agent Intelligence" },
  { key: "security-intelligence", label: "Security Intelligence" },
] as const satisfies readonly { key: IntelligenceEngineKey; label: string }[];

export function isCacsmsBrainEngine(key: string): key is IntelligenceEngineKey {
  return cacsmsBrainEngines.some((engine) => engine.key === key);
}
`,
);

writeFile(
  join("packages", "brain", "src", "runtime.ts"),
  `import type { IntelligenceEngine, IntelligenceEngineKey, IntelligenceRequest, IntelligenceResponse } from "../../types/src";

export class IntelligenceRuntime {
  private engines = new Map<IntelligenceEngineKey, IntelligenceEngine>();

  registerEngine(engine: IntelligenceEngine) {
    this.engines.set(engine.key, engine);
  }

  getEngine(key: IntelligenceEngineKey) {
    return this.engines.get(key);
  }

  async execute<TInput, TOutput>(request: IntelligenceRequest<TInput>): Promise<IntelligenceResponse<TOutput>> {
    const engine = this.engines.get(request.engine);

    if (!engine) {
      throw new Error(\`CACSMS Brain engine is not registered: \${request.engine}\`);
    }

    const started = Date.now();
    const startedAt = new Date(started).toISOString();
    const methodName = request.capability.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase()) as keyof IntelligenceEngine;
    const method = engine[methodName];

    if (typeof method !== "function") {
      throw new Error(\`CACSMS Brain engine \${engine.key} does not support capability \${request.capability}\`);
    }

    const output = await (method as (input: TInput) => Promise<TOutput>)(request.input);
    const completed = Date.now();

    return {
      requestId: request.id,
      engine: engine.key,
      engineVersion: engine.version,
      confidence: 1,
      output,
      telemetry: {
        startedAt,
        completedAt: new Date(completed).toISOString(),
        executionMs: completed - started,
      },
    };
  }
}
`,
);

writeFile(
  join("packages", "brain", "src", "index.ts"),
  `export * from "./engines";
export * from "./runtime";
`,
);

for (const module of registry) {
  writeFile(
    join("apps", "web", "app", module.key, "page.tsx"),
    `export default function ${pascalCase(module.label)}Page() {\n  return null;\n}\n`,
  );

  for (const subdir of moduleSubdirs) {
    writeFile(join("modules", module.key, subdir, ".gitkeep"), "");
  }

  writeFile(
    join("modules", module.key, "index.ts"),
    `export const moduleKey = "${module.key}";\nexport const moduleLabel = "${module.label}";\nexport const modulePermission = "${module.permission}";\nexport const moduleDescription = "${module.description}";\n`,
  );

  writeFile(
    join("services", module.key, "index.ts"),
    `export const serviceDomain = "${module.key}";\nexport const servicePermission = "${module.permission}";\n`,
  );

  for (const child of module.children ?? []) {
    writeFile(
      join("apps", "web", "app", module.key, child.key, "page.tsx"),
      `export default function ${pascalCase(`${module.label} ${child.label}`)}Page() {\n  return null;\n}\n`,
    );
    writeFile(
      join("modules", module.key, "pages", child.key, "index.ts"),
      `export const pageKey = "${child.key}";\nexport const pageLabel = "${child.label}";\nexport const pageRoute = "${child.route}";\nexport const pagePermission = "${child.permission}";\n`,
    );
    writeFile(
      join("services", module.key, `${child.key}.service.ts`),
      `export const serviceKey = "${child.key}";\nexport const servicePermission = "${child.permission}";\n`,
    );

    for (const nestedChild of child.children ?? []) {
      writeFile(
        join("apps", "web", "app", module.key, child.key, nestedChild.key, "page.tsx"),
        `export default function ${pascalCase(`${module.label} ${child.label} ${nestedChild.label}`)}Page() {\n  return null;\n}\n`,
      );
      writeFile(
        join("modules", module.key, "pages", child.key, nestedChild.key, "index.ts"),
        `export const pageKey = "${nestedChild.key}";\nexport const pageLabel = "${nestedChild.label}";\nexport const pageRoute = "${nestedChild.route}";\nexport const pagePermission = "${nestedChild.permission}";\n`,
      );
      writeFile(
        join("services", module.key, `${child.key}.${nestedChild.key}.service.ts`),
        `export const serviceKey = "${child.key}.${nestedChild.key}";\nexport const servicePermission = "${nestedChild.permission}";\n`,
      );
    }
  }
}

writeFile(
  join("services", "autonomous-control", "decision-engine.service.ts"),
  `import type { DecisionScores, PolicyThresholds } from "../../packages/types/src";

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
`,
);

writeFile(
  join("services", "autonomous-control", "policy-engine.service.ts"),
  `import { defaultPolicyThresholds } from "../../packages/config/src";
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
`,
);

writeFile(
  join("services", "autonomous-control", "self-correction.service.ts"),
  `export type SelfCorrectionAttempt<T> = {
  attempt: number;
  value: T;
  passed: boolean;
  reason?: string;
};

export async function runSelfCorrection<T>(
  initialValue: T,
  retryLimit: number,
  correct: (value: T, attempt: number) => Promise<T>,
  validate: (value: T) => Promise<{ passed: boolean; reason?: string }>,
) {
  const attempts: SelfCorrectionAttempt<T>[] = [];
  let currentValue = initialValue;

  for (let attempt = 0; attempt <= retryLimit; attempt += 1) {
    const validation = await validate(currentValue);
    attempts.push({ attempt, value: currentValue, ...validation });

    if (validation.passed) {
      return { status: "corrected" as const, value: currentValue, attempts };
    }

    if (attempt < retryLimit) {
      currentValue = await correct(currentValue, attempt + 1);
    }
  }

  return { status: "exception" as const, value: currentValue, attempts };
}
`,
);

writeFile(
  join("services", "autonomous-control", "exception-engine.service.ts"),
  `import type { AutonomousException } from "../../packages/types/src";

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
`,
);

writeFile(
  join("services", "autonomous-control", "learning-engine.service.ts"),
  `import { learningInputs } from "../../packages/types/src";

export type LearningUpdate = {
  source: (typeof learningInputs)[number];
  insight: string;
  appliedTo: "planning" | "scheduling" | "content-generation" | "recommendations" | "agent-behaviour";
  confidence: number;
};

export function applyLearning(update: LearningUpdate) {
  return {
    ...update,
    appliedAt: new Date().toISOString(),
  };
}
`,
);

writeFile(
  join("modules", "autonomous-control", "constants", "autonomous-dashboard.ts"),
  `export const autonomousDashboardMetrics = [
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
`,
);

writeFile(
  join("modules", "autonomous-control", "constants", "planning-cadence.ts"),
  `export const autonomousPlanningCadence = [
  "annual-strategy",
  "quarterly-strategy",
  "monthly-strategy",
  "weekly-plan",
  "daily-schedule",
  "hourly-execution",
] as const;

export const weeklyPublishingPattern = {
  monday: "Educational",
  tuesday: "Industry Insight",
  wednesday: "Case Study",
  thursday: "Product Demonstration",
  friday: "Thought Leadership",
  saturday: "Repurposed Content",
  sunday: "Weekly Summary",
} as const;
`,
);

writeFile(
  join("modules", "knowledge-base", "constants", "autonomous-memory.ts"),
  `export const autonomousMemoryDomains = [
  "brand",
  "audience",
  "writing-style",
  "previous-campaigns",
  "business-objectives",
  "products",
  "services",
  "competitors",
  "successful-content",
  "failed-content",
  "customer-interactions",
  "business-knowledge",
  "uploaded-documents",
  "historical-decisions",
] as const;
`,
);

writeFile(
  join("modules", "creative-studio", "constants", "creative-dashboard.ts"),
  `export const creativeDashboardMetrics = [
  "creativePipeline",
  "runningProductions",
  "upcomingProductions",
  "publishedProductions",
  "creativeHealth",
  "brandConsistency",
  "productionQueue",
  "aiRecommendations",
  "trendingOpportunities",
  "campaignStatus",
  "platformStatus",
  "agentStatus",
  "learningInsights",
  "storageUsage",
  "renderQueue",
  "processingQueue",
  "projectProgress",
  "recentActivities",
  "performanceKpis",
] as const;
`,
);

writeFile(
  join("modules", "creative-studio", "constants", "studio-capabilities.ts"),
  `export const contentStudioCapabilities = [
  "topic-generation",
  "content-planning",
  "blog-writing",
  "linkedin-writing",
  "facebook-writing",
  "instagram-writing",
  "twitter-x-writing",
  "email-writing",
  "newsletter-writing",
  "landing-page-writing",
  "product-descriptions",
  "case-studies",
  "whitepapers",
  "reports",
  "books",
  "technical-documentation",
  "sales-copy",
  "marketing-copy",
  "seo-optimization",
  "content-repurposing",
  "translation",
  "localization",
  "content-scoring",
  "brand-consistency",
  "content-archive",
] as const;

export const imageStudioCapabilities = [
  "text-to-image",
  "image-enhancement",
  "image-editing",
  "background-removal",
  "brand-overlays",
  "poster-generation",
  "social-media-graphics",
  "banner-generation",
  "infographics",
  "illustrations",
  "marketing-creatives",
  "product-mockups",
  "thumbnail-generation",
  "presentation-graphics",
  "ai-image-upscaling",
  "style-transfer",
  "image-library",
  "version-history",
] as const;

export const audioStudioCapabilities = [
  "voice-generation",
  "authorized-voice-cloning",
  "background-music",
  "music-generation",
  "audio-enhancement",
  "noise-reduction",
  "speech-synthesis",
  "speech-recognition",
  "podcast-editing",
  "audio-branding",
  "sound-effects",
  "audio-library",
  "mixing",
  "mastering",
  "export",
] as const;

export const designStudioCapabilities = [
  "logos",
  "brand-identity",
  "social-media-graphics",
  "icons",
  "banners",
  "business-cards",
  "flyers",
  "brochures",
  "packaging",
  "marketing-materials",
  "campaign-creatives",
  "presentation-graphics",
  "email-graphics",
  "web-graphics",
] as const;
`,
);

writeFile(
  join("modules", "creative-studio", "constants", "module-integrations.ts"),
  `export const creativeStudioIntegrations = {
  dashboard: [
    "running-productions",
    "creative-kpis",
    "publishing-queue",
    "production-health",
    "active-creative-agents",
    "creative-recommendations",
    "pending-render-jobs",
    "recent-productions",
    "learning-insights",
    "campaign-performance",
  ],
  workspace: ["workspace", "brand", "campaign", "project", "creative-production"],
  brandManager: [
    "brand-voice",
    "brand-guidelines",
    "fonts",
    "colours",
    "logos",
    "products",
    "services",
    "audience",
    "messaging",
    "keywords",
    "case-studies",
    "content-pillars",
    "business-objectives",
  ],
  contentPlatform: [
    "content-library",
    "templates",
    "publishing-queue",
    "content-calendar",
    "content-generator",
    "ai-reviewer",
    "content-history",
  ],
  researchCenter: [
    "topic-research",
    "competitor-research",
    "trend-discovery",
    "keyword-research",
    "industry-insights",
    "audience-research",
    "news-monitoring",
    "research-library",
  ],
  campaignManager: ["campaign", "goals", "timeline", "audience", "kpis", "deliverables", "performance"],
  approvalCenter: ["ai-review", "policy-validation", "decision-engine", "auto-approval", "publishing"],
  socialPublishing: [
    "linkedin",
    "facebook",
    "instagram",
    "threads",
    "x",
    "youtube",
    "tiktok",
    "blog",
    "email-newsletter",
    "aspect-ratio",
    "length",
    "metadata",
    "hashtags",
    "cta",
    "thumbnail",
    "captions",
  ],
  knowledgeBase: [
    "documents",
    "previous-campaigns",
    "brand-memory",
    "content-memory",
    "approved-phrases",
    "business-profile",
    "product-knowledge",
  ],
  workflowEngine: [
    "workflow-builder",
    "automation-rules",
    "execution-history",
    "version-control",
    "audit-trail",
    "notifications",
    "scheduling",
    "task-management",
  ],
  analyticsCenter: [
    "content-analytics",
    "campaign-analytics",
    "audience-analytics",
    "platform-analytics",
    "performance-dashboard",
    "ai-recommendations",
    "learning-engine",
  ],
} as const;
`,
);

writeFile(
  join("modules", "creative-studio", "constants", "creative-assets.ts"),
  `export const brandAssetTypes = [
  "logos",
  "fonts",
  "brand-colors",
  "icons",
  "images",
  "videos",
  "templates",
  "music",
  "voice-profiles",
  "animations",
  "transitions",
  "documents",
  "brand-guidelines",
  "reusable-assets",
  "version-history",
] as const;

export const creativeTemplateCategories = [
  "marketing",
  "sales",
  "education",
  "corporate",
  "events",
  "hr",
  "recruitment",
  "training",
  "product-launch",
  "customer-success",
  "social-media",
  "email",
  "video",
  "presentation",
  "documents",
] as const;
`,
);

writeFile(
  join("services", "creative-studio", "creative-decision-engine.service.ts"),
  `import type { CreativeDecisionScores } from "../../packages/types/src";

export type CreativePolicyThresholds = {
  brandFitMinimum: number;
  brandAlignmentMinimum: number;
  businessAlignmentMinimum: number;
  complianceMinimum: number;
  qualityMinimum: number;
  riskMaximum: number;
  platformSuitabilityMinimum: number;
  audienceFitMinimum: number;
  predictedEngagementMinimum: number;
  predictedRoiMinimum: number;
  confidenceMinimum: number;
  historicalSuccessMinimum: number;
  duplicateDetectionMaximum: number;
  trendAlignmentMinimum: number;
  publishingWindowMinimum: number;
};

export const defaultCreativePolicyThresholds = {
  brandFitMinimum: 90,
  brandAlignmentMinimum: 90,
  businessAlignmentMinimum: 85,
  complianceMinimum: 95,
  qualityMinimum: 85,
  riskMaximum: 15,
  platformSuitabilityMinimum: 80,
  audienceFitMinimum: 80,
  predictedEngagementMinimum: 70,
  predictedRoiMinimum: 65,
  confidenceMinimum: 90,
  historicalSuccessMinimum: 70,
  duplicateDetectionMaximum: 10,
  trendAlignmentMinimum: 70,
  publishingWindowMinimum: 75,
} as const satisfies CreativePolicyThresholds;

export function evaluateCreativeProduction(
  scores: CreativeDecisionScores,
  thresholds: CreativePolicyThresholds = defaultCreativePolicyThresholds,
) {
  const failures = [
    scores.brandFit >= thresholds.brandFitMinimum ? null : "Brand fit below threshold.",
    scores.brandAlignment >= thresholds.brandAlignmentMinimum ? null : "Brand alignment below threshold.",
    scores.businessAlignment >= thresholds.businessAlignmentMinimum ? null : "Business alignment below threshold.",
    scores.compliance >= thresholds.complianceMinimum ? null : "Compliance below threshold.",
    scores.quality >= thresholds.qualityMinimum ? null : "Quality below threshold.",
    scores.risk <= thresholds.riskMaximum ? null : "Risk exceeds threshold.",
    scores.platformSuitability >= thresholds.platformSuitabilityMinimum ? null : "Platform suitability below threshold.",
    scores.audienceFit >= thresholds.audienceFitMinimum ? null : "Audience fit below threshold.",
    scores.predictedEngagement >= thresholds.predictedEngagementMinimum ? null : "Predicted engagement below threshold.",
    scores.predictedRoi >= thresholds.predictedRoiMinimum ? null : "Predicted ROI below threshold.",
    scores.confidence >= thresholds.confidenceMinimum ? null : "Confidence below threshold.",
    scores.historicalSuccess >= thresholds.historicalSuccessMinimum ? null : "Historical success below threshold.",
    scores.duplicateDetection <= thresholds.duplicateDetectionMaximum ? null : "Duplicate detection exceeds threshold.",
    scores.trendAlignment >= thresholds.trendAlignmentMinimum ? null : "Trend alignment below threshold.",
    scores.publishingWindow >= thresholds.publishingWindowMinimum ? null : "Publishing window below threshold.",
  ].filter((failure): failure is string => Boolean(failure));

  return {
    approvedForPublishing: failures.length === 0,
    failures,
    scores,
  };
}
`,
);

writeFile(
  join("services", "creative-studio", "production-workflow.service.ts"),
  `import { creativeLifecycle, videoProductionPipeline } from "../../packages/types/src";

export function getCreativeLifecycle() {
  return creativeLifecycle;
}

export function getVideoProductionPipeline() {
  return videoProductionPipeline;
}

export function createProductionRun(objective: string) {
  return {
    objective,
    currentStep: creativeLifecycle[0],
    requiredPipeline: creativeLifecycle,
    createdAt: new Date().toISOString(),
  };
}
`,
);

writeFile(
  join("services", "creative-studio", "creative-agents.service.ts"),
  `import { creativeAgents } from "../../packages/types/src";

export type CreativeAgentProfile = {
  key: (typeof creativeAgents)[number];
  mission: string;
  responsibilities: string[];
  tools: string[];
  permissions: string[];
  kpis: string[];
};

export function getRequiredCreativeAgents() {
  return creativeAgents;
}

export function createCreativeAgentProfile(key: (typeof creativeAgents)[number]): CreativeAgentProfile {
  return {
    key,
    mission: "Autonomously improve creative production outcomes while respecting brand, policy, and risk constraints.",
    responsibilities: ["plan", "produce", "review", "optimize", "learn"],
    tools: [],
    permissions: ["creative-studio.agents." + key + ".execute"],
    kpis: ["quality", "confidence", "brand-fit", "business-impact"],
  };
}
`,
);

writeFile(
  join("services", "creative-studio", "integration-orchestrator.service.ts"),
  `import { creativeStudioIntegrations } from "../../modules/creative-studio/constants/module-integrations";

export type CreativeProductionContext = {
  workspaceId: string;
  brandId: string;
  campaignId: string;
  projectId: string;
  productionId: string;
};

export function validateCreativeProductionContext(context: CreativeProductionContext) {
  return Object.entries(context).every(([, value]) => value.trim().length > 0);
}

export function getCreativeStudioIntegrations() {
  return creativeStudioIntegrations;
}

export function assertNoStandaloneProduction(context: CreativeProductionContext) {
  if (!validateCreativeProductionContext(context)) {
    throw new Error("Creative productions must belong to a workspace, brand, campaign, project, and production record.");
  }

  return context;
}
`,
);

writeFile(
  join("services", "cacsms-brain", "index.ts"),
  `export * from "../../packages/brain/src";
`,
);

writeFile(
  join("services", "cacsms-brain", "brain-client.service.ts"),
  `import { IntelligenceRuntime } from "../../packages/brain/src";
import type { IntelligenceRequest } from "../../packages/types/src";

const runtime = new IntelligenceRuntime();

export function getCacsmsBrainRuntime() {
  return runtime;
}

export async function executeWithCacsmsBrain<TInput, TOutput>(request: IntelligenceRequest<TInput>) {
  return runtime.execute<TInput, TOutput>(request);
}
`,
);

writeFile(
  join("services", "cacsms-brain", "capability-registry.service.ts"),
  `import { intelligenceCapabilities, intelligenceEngineKeys } from "../../packages/types/src";

export function getBrainCapabilityRegistry() {
  return intelligenceEngineKeys.map((engine) => ({
    engine,
    capabilities: intelligenceCapabilities,
  }));
}
`,
);

writeFile(
  join("services", "model-registry", "index.ts"),
  `export type EngineRegistration = {
  engineKey: string;
  version: string;
  capabilities: string[];
  benchmarkIds: string[];
  deploymentStatus: "development" | "testing" | "active" | "deprecated" | "rolled-back";
  healthStatus: "healthy" | "degraded" | "unavailable";
};

const registrations = new Map<string, EngineRegistration>();

export function registerIntelligenceEngine(registration: EngineRegistration) {
  registrations.set(\`\${registration.engineKey}@\${registration.version}\`, registration);
  return registration;
}

export function listIntelligenceEngines() {
  return [...registrations.values()];
}

export function getIntelligenceEngine(engineKey: string, version: string) {
  return registrations.get(\`\${engineKey}@\${version}\`);
}
`,
);

writeFile(
  join("services", "datasets", "index.ts"),
  `import { datasetDomains, datasetGovernanceCapabilities } from "../../packages/types/src";

export type DatasetRecord = {
  id: string;
  domain: (typeof datasetDomains)[number];
  version: string;
  tags: string[];
  lineage: string[];
  qualityScore: number;
  approved: boolean;
  retentionPolicy: string;
};

export function getDatasetDomains() {
  return datasetDomains;
}

export function getDatasetGovernanceCapabilities() {
  return datasetGovernanceCapabilities;
}
`,
);

writeFile(
  join("services", "autonomous-training-center", "index.ts"),
  `import { trainingCenterCapabilities } from "../../packages/types/src";

export type TrainingJob = {
  id: string;
  datasetIds: string[];
  targetEngine: string;
  status: "queued" | "running" | "evaluating" | "validated" | "deployed" | "rolled-back" | "failed";
  experimentId?: string;
};

export function getTrainingCenterCapabilities() {
  return trainingCenterCapabilities;
}

export function createTrainingJob(job: TrainingJob) {
  return job;
}
`,
);

writeFile(
  join("services", "autonomous-agents", "brain-agent-client.service.ts"),
  `import { executeWithCacsmsBrain } from "../cacsms-brain/brain-client.service";
import type { IntelligenceEngineKey, IntelligenceRequest } from "../../packages/types/src";

export function createAgentBrainRequest<TInput>(
  agentKey: string,
  engine: IntelligenceEngineKey,
  capability: IntelligenceRequest<TInput>["capability"],
  input: TInput,
): IntelligenceRequest<TInput> {
  return {
    id: \`\${agentKey}-\${Date.now()}\`,
    engine,
    capability,
    input,
    context: { agentKey },
  };
}

export async function executeAgentThroughBrain<TInput, TOutput>(request: IntelligenceRequest<TInput>) {
  return executeWithCacsmsBrain<TInput, TOutput>(request);
}
`,
);

writeFile(
  join("services", "creative-studio", "brain-orchestrator.service.ts"),
  `import { executeWithCacsmsBrain } from "../cacsms-brain/brain-client.service";
import type { IntelligenceEngineKey, IntelligenceRequest } from "../../packages/types/src";

export const creativeStudioBrainFlow = [
  "creative-intelligence",
  "vision-intelligence",
  "video-intelligence",
  "audio-intelligence",
  "knowledge-intelligence",
  "decision-intelligence",
  "learning-intelligence",
] as const satisfies readonly IntelligenceEngineKey[];

export async function executeCreativeStudioBrainStep<TInput, TOutput>(
  engine: (typeof creativeStudioBrainFlow)[number],
  capability: IntelligenceRequest<TInput>["capability"],
  input: TInput,
) {
  return executeWithCacsmsBrain<TInput, TOutput>({
    id: \`creative-studio-\${engine}-\${Date.now()}\`,
    engine,
    capability,
    input,
    context: { module: "creative-studio" },
  });
}
`,
);

writeFile(join("apps", "api", ".gitkeep"), "");
writeFile(join("apps", "worker", ".gitkeep"), "");
writeFile(join("apps", "scheduler", ".gitkeep"), "");

const sidebarDoc = `# Sidebar Structure

CACSMS Autonomous uses the module registry as the canonical source for sidebar modules, routes, permissions, and breadcrumbs.

${registry
  .map(
    (module) =>
      `## ${module.label}\n\n- Key: \`${module.key}\`\n- Route: \`${module.route}\`\n- Permission: \`${module.permission}\`\n\n${(module.children ?? [])
        .map((child) => {
          const nested = (child.children ?? []).map((nestedChild) => `  - ${nestedChild.label}: \`${nestedChild.route}\` / \`${nestedChild.permission}\``).join("\n");
          return `- ${child.label}: \`${child.route}\` / \`${child.permission}\`${nested ? `\n${nested}` : ""}`;
        })
        .join("\n")}`,
  )
  .join("\n\n")}
`;

const routingDoc = `# Routing Map

Rule: Sidebar Module = App Route = Module Folder = Backend Domain.

${registry
  .map(
    (module) =>
      `## ${module.label}\n\n| Item | Route | Module Folder | Service |\n| --- | --- | --- | --- |\n| ${module.label} | \`${module.route}\` | \`modules/${module.key}\` | \`services/${module.key}\` |\n${(module.children ?? [])
        .flatMap((child) => [
          `| ${child.label} | \`${child.route}\` | \`modules/${module.key}/pages/${child.key}\` | \`services/${module.key}/${child.key}.service.ts\` |`,
          ...(child.children ?? []).map(
            (nestedChild) =>
              `| ${child.label} / ${nestedChild.label} | \`${nestedChild.route}\` | \`modules/${module.key}/pages/${child.key}/${nestedChild.key}\` | \`services/${module.key}/${child.key}.${nestedChild.key}.service.ts\` |`,
          ),
        ])
        .join("\n")}`,
  )
  .join("\n\n")}
`;

const registryDoc = `# Module Registry

The registry lives at \`packages/config/src/module-registry.ts\`.

Development rule: no developer should create a new folder, route, permission, sidebar item, or breadcrumb unless it exists first in \`MODULE_REGISTRY\`.

Generated consumers:

- \`getSidebarItems()\`
- \`getRouteMap()\`
- \`getPermissionMap()\`
- \`getBreadcrumbs(route)\`

Official module names:

- Content Platform, not Content Studio
- Creative Studio is the official flagship multimedia production module.
- Social Publishing, not Social Publisher
- Workflow Engine, not Workflow Automation
- Security & Compliance, not Security

Each registry item includes:

- \`key\`
- \`label\`
- \`icon\`
- \`route\`
- \`permission\`
- \`description\`
- \`featureFlag\`
- \`status\`
- \`order\`
- \`visibilityRules\`
`;

const namingDoc = `# Naming Convention

Canonical alignment:

- Sidebar Module = App Route = Module Folder = Backend Domain
- Module labels use Title Case.
- Routes and folders use kebab-case.
- Permissions use dot notation and end in \`.view\` for read access.

Example:

- Sidebar Page: Content Platform -> Monthly Planner
- Route: \`/content-platform/monthly-planner\`
- Folder: \`modules/content-platform/pages/monthly-planner\`
- Service: \`services/content-platform/monthly-planner.service.ts\`
- Permission: \`content-platform.monthly-planner.view\`

Every module contains:

\`\`\`text
pages/
components/
forms/
tables/
cards/
dialogs/
hooks/
api/
services/
schemas/
types/
constants/
utils/
permissions/
workflows/
tests/
index.ts
\`\`\`
`;

writeFile(join("docs", "sidebar-structure.md"), sidebarDoc);
writeFile(join("docs", "routing-map.md"), routingDoc);
writeFile(join("docs", "module-registry.md"), registryDoc);
writeFile(join("docs", "naming-convention.md"), namingDoc);

writeFile(
  join("docs", "design-system.md"),
  `# Design System

CACSMS Autonomous uses a white, enterprise SaaS workspace inspired by Microsoft 365, Linear, Notion, Salesforce Lightning, GitHub, and Atlassian.

## Core Tokens

| Token | Value |
| --- | --- |
| Page Background | \`#FFFFFF\` |
| Sidebar Background | \`#FFFFFF\` |
| Card Background | \`#FFFFFF\` |
| Primary Blue | \`#2563EB\` |
| Primary Hover | \`#1D4ED8\` |
| Deep Navy Text | \`#0F172A\` |
| Primary Text | \`#111827\` |
| Secondary Text | \`#4B5563\` |
| Muted Text | \`#9CA3AF\` |
| Border | \`#E5E7EB\` |
| Soft Border | \`#EEF2F7\` |
| Hover Background | \`#F8FAFC\` |
| Selected Background | \`#EEF4FF\` |
| Success | \`#16A34A\` |
| Warning | \`#F59E0B\` |
| Danger | \`#DC2626\` |
| Info | \`#0284C7\` |
| Purple Accent | \`#7C3AED\` |
| Teal Accent | \`#0D9488\` |
| AI Gradient | \`linear-gradient(135deg, #2563EB, #7C3AED)\` |

## Typography

- Font: Inter
- Page title: 32px / 700
- Section title: 24px / 600
- Card title: 18px / 600
- Body: 16px / 400
- Caption: 14px / 400
- Small label: 12px / 500

## Sidebar

- Expanded width: 280px
- Collapsed width: 80px
- Menu height: 48px
- Icon size: 22-24px
- Radius: 12px
- Active indicator: 4px solid \`#2563EB\`
- Supports nested expansion, active state, search, pinning, tooltips, permission visibility, counts, notifications, and mobile drawer behavior.

## Page Layout Standard

1. Breadcrumb
2. Page title
3. Page description
4. Quick action buttons
5. Search/filter/action bar
6. Main content area
7. Tables/cards/charts/forms
8. AI insights panel where relevant
9. Activity/audit trail where relevant
`,
);

writeFile(
  join("docs", "autonomous-behavior.md"),
  `# Autonomous Behavior

CACSMS Autonomous is a true autonomous business operating system, not a chatbot, assistant panel, or basic content management tool.

Humans define vision, business goals, brand, policies, constraints, and risk tolerance. The system performs the operational work continuously.

## Operating Loop

\`\`\`text
Observe
Understand
Research
Reason
Plan
Predict
Generate
Review
Score
Decision
Policy Validation
Auto Approval
Schedule
Execute
Monitor
Measure
Learn
Optimize
Repeat
\`\`\`

No workflow should bypass this lifecycle unless explicitly configured.

Human input is limited to initial onboarding, workspace creation, connecting external accounts, defining business objectives, defining policies, emergency override, and changing long-term strategy.

## Autonomy Levels

| Level | Name |
| --- | --- |
| 0 | Manual Mode |
| 1 | Assisted Mode |
| 2 | Semi Autonomous |
| 3 | Policy Driven |
| 4 | Highly Autonomous |
| 5 | Fully Autonomous |

Default long-term target: Level 5.

## Autonomous Control

The Autonomous Control module is the operating brain of the platform. It owns autonomy level, decision rules, risk policies, auto-approval rules, publishing guardrails, exception queue, failsafe controls, human override, execution logs, and learning settings.

Dashboard metrics:

- Current autonomy level
- Active agents
- Running workflows
- Success rate
- Failure rate
- Decisions today
- Scheduled actions
- Published actions
- Learning progress
- Risk score
- System confidence

## Decision Engine

Every action is evaluated for confidence, quality, compliance, risk, business objective alignment, historical performance, and probability of success.

Score dimensions:

- Brand fit: 0-100
- Content quality: 0-100
- Compliance: 0-100
- Audience relevance: 0-100
- Business goal alignment: 0-100
- Risk: 0-100
- Confidence: 0-100

## Policy Engine

Manual approvals are replaced with policy-driven approvals. Default policy example:

- Brand fit >= 90
- Compliance >= 95
- Risk <= 15
- Confidence >= 90

Actions that pass policy can be auto-approved. Actions that fail should attempt autonomous correction before entering the exception queue.

## Self-Correction

The platform must not stop after a single failure. It should identify the issue, rewrite or retry automatically, review again, score again, and continue until success or retry limit.

## Exception Engine

Exceptions include publishing failure, API outage, low confidence, risk exceeded, expired OAuth, compliance violation, policy conflict, and repeated workflow failure.

Every exception records root cause, suggested fix, automatic retry strategy, and escalation policy.

## Learning Engine

Completed workflows update future planning, scheduling, generation, recommendations, and agent behavior.

Learning inputs include engagement, conversions, failures, approvals, rejected actions, publishing times, audience behavior, platform analytics, and campaign performance.

## Autonomous Memory

The platform remembers brand, audience, writing style, previous campaigns, business objectives, products, services, competitors, successful content, failed content, customer interactions, business knowledge, uploaded documents, and historical decisions.

Everything should become searchable.

## Planning

The system automatically generates annual strategy, quarterly strategy, monthly strategy, weekly plan, daily schedule, and hourly execution without user prompting.

## Research

The system continuously monitors trends, competitors, industry news, keywords, audience interests, and engagement changes, then generates opportunities automatically.

## Monitoring And Optimization

The platform continuously monitors publishing, engagement, audience growth, competitors, API health, OAuth tokens, agent health, workflow failures, performance, and business goals.

It continuously optimizes titles, hooks, posting times, platforms, content length, writing style, calls to action, media selection, and campaign performance.

## Security

The autonomous layer protects OAuth tokens, API keys, business documents, knowledge base, customer data, publishing permissions, integrations, and audit trails. Abnormal behavior must be detected and handled according to policy.
`,
);

writeFile(
  join("docs", "autonomous-architecture.md"),
  `# Autonomous Architecture

CACSMS Autonomous behaves like a digital workforce. Agents coordinate through the autonomous lifecycle and consume intelligence through CACSMS Brain. Decision, policy, exception, learning, and memory services remain stable application services, while intelligence execution is routed through native Brain engines.

## Core Engines

| Engine | Responsibility | Location |
| --- | --- | --- |
| Decision Engine | Scores proposed actions against quality, compliance, confidence, risk, goals, and probability of success. | \`services/autonomous-control/decision-engine.service.ts\` |
| Policy Engine | Converts scores and thresholds into auto-approval, self-correction, or exception decisions. | \`services/autonomous-control/policy-engine.service.ts\` |
| Self-Correction | Retries failed validations until success or retry limit. | \`services/autonomous-control/self-correction.service.ts\` |
| Exception Engine | Captures root cause, suggested fix, retry strategy, and escalation policy. | \`services/autonomous-control/exception-engine.service.ts\` |
| Learning Engine | Applies completed workflow insights to future operations. | \`services/autonomous-control/learning-engine.service.ts\` |

## Daily Autonomous Content Workflow

1. Research Agent finds trends and opportunities.
2. Planning Agent selects the highest-value topic.
3. Content Agent generates content.
4. Editor Agent improves quality.
5. Brand Agent checks voice.
6. Compliance Agent validates.
7. Decision Engine scores.
8. Policy Engine approves or requests correction.
9. Scheduler Agent determines best posting time.
10. Publishing Agent publishes.
11. Analytics Agent measures.
12. Learning Agent improves future strategy.

## Agent Collaboration

Research Agent -> Planning Agent -> Content Agent -> Editor Agent -> Brand Agent -> Compliance Agent -> Scheduler Agent -> Publishing Agent -> Analytics Agent -> Learning Agent.

## Principle

The platform must never ask "What should I do next?" It continuously determines what needs attention, what should be created, what should be improved, what should be executed, and what should be learned.
`,
);

writeFile(
  join("docs", "creative-studio.md"),
  `# Creative Studio

Creative Studio is the enterprise autonomous multimedia production platform inside CACSMS Autonomous. It behaves like a digital creative agency that can plan, research, write, design, produce, edit, optimize, publish, monitor, learn, and continuously improve multimedia content.

This is separate from Content Platform. Content Platform remains the planning and content operations module; Creative Studio is the full multimedia production house.

This module extends the existing CACSMS Autonomous architecture. It must not create duplicate workflow engines, agent frameworks, approval systems, publishing systems, analytics systems, or content libraries.

## Philosophy

Every creative production starts with a business objective.

\`\`\`text
Business Objective
Research
Strategy
Planning
Content Creation
Creative Production
Review
Optimization
Publishing
Monitoring
Learning
Continuous Improvement
\`\`\`

No media should be created without understanding the business objective, audience, target platform, style, format, script, visuals, narration, thumbnail, posting time, and improvement path.

## Sidebar Structure

- Dashboard
- Creative Projects
- Creative Workspace
- Image Studio
- Video Studio
- Audio Studio
- Podcast Studio
- Presentation Studio
- Document Studio
- Design Studio
- Creative Templates
- Brand Asset Library
- Publishing Center
- Creative Analytics
- Learning Center
- Creative Settings

Every production belongs to Workspace -> Brand -> Campaign -> Project -> Creative Production. Standalone productions are invalid.

Video Studio includes its own production-house subpages for dashboard, research, ideas, strategy, script writer, script reviewer, storyboard, scene planner, shot planner, timeline, visual planner, image generation, video generation, voice generation, narration, music, animation, editing, subtitles, captions, thumbnails, publishing, analytics, version history, templates, archive, and asset library.

## Module Integrations

Creative Studio integrates with:

- Dashboard for running productions, creative KPIs, publishing queue, production health, active creative agents, render jobs, recent productions, learning insights, and campaign performance.
- Workspace for ownership through workspace, brand, campaign, project, and production.
- Brand Manager for brand voice, guidelines, fonts, colours, logos, products, services, audience, messaging, keywords, case studies, content pillars, and business objectives.
- Content Platform for content library, templates, publishing queue, content calendar, content generator, AI reviewer, and content history.
- Research Center for topic, competitor, trend, keyword, industry, audience, news, and library inputs.
- Campaign Manager for campaign goals, timeline, audience, KPIs, deliverables, and performance.
- Approval Center and Autonomous Control for AI review, policy validation, decision engine, auto approval, retry, exception queue, and publishing guardrails.
- Social Publishing for platform optimization across LinkedIn, Facebook, Instagram, Threads, X, YouTube, TikTok, Blog, and Email Newsletter.
- Knowledge Base for documents, previous campaigns, brand memory, content memory, approved phrases, business profile, and product knowledge.
- Workflow Engine for workflow builder, automation rules, execution history, version control, audit trail, notifications, scheduling, and task management.
- Analytics Center for content, campaign, audience, platform, performance, recommendations, and learning metrics.

## Production Workflow

Business Objective -> Research Agent -> Trend Agent -> Planning Agent -> Creative Director Agent -> Script Agent -> Storyboard Agent -> Scene Agent -> Visual Designer -> Image Generator -> Video Generator -> Voice Generator -> Music Generator -> Animation Agent -> Editor Agent -> Subtitle Agent -> SEO Agent -> Compliance Agent -> Brand Agent -> Creative QA Agent -> Decision Engine -> Policy Engine -> Auto Approval -> Publishing Agent -> Analytics Agent -> Creative Learning Agent -> Continuous Optimization.

## Decision Engine

Before publishing, every production is evaluated for business alignment, brand alignment, quality, risk, compliance, audience fit, platform suitability, predicted engagement, predicted ROI, confidence, duplicate detection, trend alignment, and publishing window.

Failed productions self-correct, retry, re-evaluate, and escalate only when necessary.

## Memory

Creative memory tracks audience, brand, visual identity, writing style, voice, successful campaigns, failed campaigns, preferred colors, preferred layouts, preferred music, preferred thumbnails, previous productions, uploaded assets, and business knowledge.

## Technical Requirements

The architecture uses CACSMS Brain and native intelligence engines instead of direct provider dependencies. It supports internal engine versioning, capability registry, distributed rendering, background jobs, parallel production, asset caching, version control, GPU acceleration, cloud rendering, high availability, scalable storage, enterprise security, audit logging, full API support, microservice-ready boundaries, and plugin expansion.

## Future Expansion

Creative Studio is designed to support 3D generation, AR, VR, holographic presentations, interactive video, digital humans, virtual presenters, live production, multi-language dubbing, AI filmmaking, autonomous advertising campaigns, and enterprise media operations.
`,
);

writeFile(
  join("docs", "intelligence-architecture.md"),
  `# Intelligence Architecture

CACSMS Autonomous is architected as an Autonomous Business Operating Platform powered by proprietary intelligence engines. The platform itself owns the intelligence layer through CACSMS Brain.

## Core Principle

Modules, agents, workflows, and services must not communicate directly with external AI providers. They communicate with CACSMS Brain, which routes work to native intelligence engines through the Intelligence Runtime.

\`\`\`text
User
CACSMS Autonomous
CACSMS Brain
Native Intelligence Engines
Response
\`\`\`

Temporary external implementations can exist behind an engine boundary during transition, but UI, modules, workflows, routes, services, APIs, and database domains must not depend on those implementations.

## CACSMS Brain

CACSMS Brain is the central intelligence layer for the platform.

Engines:

- Language Intelligence
- Vision Intelligence
- Video Intelligence
- Audio Intelligence
- Voice Intelligence
- Creative Intelligence
- Knowledge Intelligence
- Memory Intelligence
- Decision Intelligence
- Workflow Intelligence
- Planning Intelligence
- Reasoning Intelligence
- Prediction Intelligence
- Analytics Intelligence
- Business Intelligence
- Trading Intelligence
- Learning Intelligence
- Optimization Intelligence
- Agent Intelligence
- Security Intelligence

Every engine exposes a common contract: initialize, observe, understand, reason, plan, execute, evaluate, learn, improve, store memory, retrieve memory, self diagnose, and self optimize.

## Intelligence Runtime

The Intelligence Runtime is internal infrastructure. It routes requests, selects the proper Brain engine, coordinates engine collaboration, manages execution lifecycle, collects telemetry, supports internal model deployment, supports experimentation, handles version failover, manages model versioning, and maintains the capability registry.

## Model Registry

The native Model Registry registers intelligence engines, manages versions, capabilities, benchmarks, deployments, testing, health, and execution statistics.

## Autonomous Training Center

The Autonomous Training Center is internal future-ready infrastructure for dataset management, training jobs, fine-tuning, evaluation, benchmarking, validation, deployment, rollback, experiment tracking, and performance comparison.

## Dataset Management

Dataset infrastructure supports business, brand, creative, image, video, audio, knowledge, workflow, agent, training, and evaluation datasets with versioning, tagging, lineage, quality scoring, approval, retention, and governance.

## Agent Refactoring

Autonomous Agents are clients of CACSMS Brain.

\`\`\`text
Agent
CACSMS Brain
Required Intelligence Engine
\`\`\`

Agents never call external implementations directly.

## Creative Studio Refactoring

Creative Studio uses Creative Intelligence, Vision Intelligence, Video Intelligence, Audio Intelligence, Knowledge Intelligence, Decision Intelligence, and Learning Intelligence through CACSMS Brain.

## Compatibility

This refactor does not change sidebar, folder structure, routes, permissions, navigation, design language, color palette, white page backgrounds, component library, workflow engine, or existing business modules.
`,
);

writeFile(
  join("packages", "ui", "src", "design-tokens.ts"),
  `export const designTokens = {
  colors: {
    pageBackground: "#FFFFFF",
    sidebarBackground: "#FFFFFF",
    cardBackground: "#FFFFFF",
    primaryBlue: "#2563EB",
    primaryHover: "#1D4ED8",
    deepNavyText: "#0F172A",
    primaryText: "#111827",
    secondaryText: "#4B5563",
    mutedText: "#9CA3AF",
    border: "#E5E7EB",
    softBorder: "#EEF2F7",
    hoverBackground: "#F8FAFC",
    selectedBackground: "#EEF4FF",
    success: "#16A34A",
    warning: "#F59E0B",
    danger: "#DC2626",
    info: "#0284C7",
    purpleAccent: "#7C3AED",
    tealAccent: "#0D9488",
    aiGradient: "linear-gradient(135deg, #2563EB, #7C3AED)",
  },
  typography: {
    fontFamily: "Inter",
    pageTitle: { fontSize: 32, fontWeight: 700 },
    sectionTitle: { fontSize: 24, fontWeight: 600 },
    cardTitle: { fontSize: 18, fontWeight: 600 },
    body: { fontSize: 16, fontWeight: 400 },
    caption: { fontSize: 14, fontWeight: 400 },
    smallLabel: { fontSize: 12, fontWeight: 500 },
  },
  layout: {
    sidebarExpandedWidth: 280,
    sidebarCollapsedWidth: 80,
    headerHeight: 72,
    workspaceMaxWidth: 1600,
    workspacePadding: 32,
    gridColumns: 12,
    menuItemHeight: 48,
    menuItemRadius: 12,
    activeIndicatorWidth: 4,
  },
} as const;
`,
);

writeFile(
  join("packages", "ui", "src", "component-contracts.ts"),
  `export const requiredUiComponents = [
  "Sidebar",
  "Header",
  "Breadcrumb",
  "PageHeader",
  "Cards",
  "MetricCards",
  "Tables",
  "Filters",
  "Search",
  "Buttons",
  "Forms",
  "Dialogs",
  "Drawers",
  "Tabs",
  "Charts",
  "Calendar",
  "Kanban",
  "Timeline",
  "AIRecommendationCard",
  "AgentStatusCard",
  "WorkflowStepper",
  "ApprovalStatusBadge",
  "PublishingStatusBadge",
  "NotificationDrawer",
  "UserProfileMenu",
  "WorkspaceSwitcher",
  "IntegrationCard",
  "EmptyState",
  "LoadingState",
  "ErrorState",
] as const;

export const statusBadges = [
  "Draft",
  "Under Review",
  "Needs Revision",
  "Approved",
  "Scheduled",
  "Published",
  "Failed",
  "Rejected",
  "Archived",
  "Running",
  "Paused",
  "Completed",
  "Warning",
  "Critical",
] as const;
`,
);

writeFile(
  join("packages", "ui", "src", "index.ts"),
  `export * from "./design-tokens";
export * from "./component-contracts";
`,
);
