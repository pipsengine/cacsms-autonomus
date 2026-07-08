import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const modules = [
  ["dashboard", "Dashboard", ["Overview", "Activity Feed", "My Tasks", "Notifications", "Recent Activities", "Performance Snapshot", "Autonomous Recommendations", "System Health"]],
  ["workspace", "Workspace", ["My Workspace", "Organizations", "Companies", "Departments", "Teams", "Brands", "Clients", "Projects", "Campaigns", "Social Accounts", "Workspace Settings"]],
  ["brand-manager", "Brand Manager", ["Brand Profile", "Audience Profile", "Brand Voice", "Content Pillars", "Products & Services", "Case Studies", "Keywords", "Competitors", "Brand Goals", "Messaging Guidelines", "Brand Assets"]],
  ["content-platform", "Content Platform", ["Content Ideas", "Monthly Planner", "Weekly Planner", "Daily Planner", "Content Calendar", "Content Generator", "Content Editor", "AI Reviewer", "Social Preview", "Scheduled Posts", "Publishing Queue", "Content Library", "Templates", "Carousel Builder", "Video Script Writer", "Blog Writer", "Newsletter Writer", "Repurpose Content", "Content Archive"]],
  ["research-center", "Research Center", ["Topic Research", "Trend Discovery", "Competitor Research", "Industry Insights", "Keyword Research", "News Monitor", "Audience Research", "Hashtag Research", "Market Research", "Research Library", "Saved Insights"]],
  ["campaign-manager", "Campaign Manager", ["Campaigns", "Campaign Goals", "Campaign Strategy", "Campaign Calendar", "Campaign Assets", "Campaign Tasks", "Campaign Content", "Campaign Approvals", "Campaign Performance", "Campaign Reports"]],
  ["approval-center", "Approval Center", ["Drafts", "AI Review Queue", "Pending Approval", "Revision Requests", "Approved Content", "Rejected Content", "Approval Workflow", "Review Comments", "Version History", "Approval Audit Trail"]],
  ["social-publishing", "Social Publishing", ["Connected Accounts", "LinkedIn", "Facebook", "Instagram", "X / Twitter", "YouTube", "TikTok", "Threads", "Blog / Website", "Email Newsletter", "Publishing Queue", "Scheduled Posts", "Published Posts", "Failed Posts", "Reconnect Accounts", "Publishing Logs"]],
  ["demo-platforms", "Demo Platforms", ["Demo LinkedIn", "Demo Facebook", "Demo Instagram", "Demo X / Twitter", "Demo YouTube", "Demo Blog", "Feed Preview", "Desktop Preview", "Mobile Preview", "Engagement Simulator", "Comment Simulator", "Share Preview"]],
  ["autonomous-agents", "Autonomous Agents", ["Agent Dashboard", "Executive Agent", "Content Agent", "Research Agent", "Brand Agent", "Social Media Agent", "Editor Agent", "Compliance Agent", "Scheduler Agent", "Analytics Agent", "Engagement Agent", "Sales Agent", "Workflow Agent", "Agent Marketplace", "Agent Memory", "Agent Permissions", "Agent Activity Logs", "Agent Performance"]],
  ["knowledge-base", "Knowledge Base", ["Business Profile", "Documents", "Uploaded Files", "Prompt Library", "Memory Center", "Content History", "Case Studies", "Products & Services", "Approved Phrases", "Restricted Phrases", "Saved Insights", "Knowledge Search", "Knowledge Tags", "Knowledge Settings"]],
  ["workflow-engine", "Workflow Engine", ["Workflow Dashboard", "Workflow Builder", "Approval Workflows", "Automation Rules", "Review Queue", "Task Assignment", "Scheduled Tasks", "Notifications", "Escalations", "Execution History", "Version Control", "Audit Trail", "Workflow Templates"]],
  ["analytics-center", "Analytics Center", ["Analytics Dashboard", "Content Analytics", "Social Analytics", "Platform Analytics", "Audience Growth", "Engagement Reports", "Campaign Performance", "Lead Analytics", "Best Performing Topics", "Best Performing Formats", "Best Posting Times", "AI Recommendations", "Reports", "Export Center"]],
  ["integration-hub", "Integration Hub", [
    ["Integration Dashboard"],
    ["Social Integrations", ["LinkedIn", "Facebook", "Instagram", "X / Twitter", "YouTube", "TikTok", "Threads"]],
    ["Email Integrations", ["Gmail", "Outlook"]],
    ["Calendar Integrations", ["Google Calendar", "Microsoft Calendar"]],
    ["Cloud Storage", ["Google Drive", "OneDrive", "Dropbox"]],
    ["Communication", ["Slack", "Microsoft Teams", "WhatsApp Business"]],
    ["Business Systems", ["CRM", "ERP", "CMS / Website"]],
    ["Payment Integrations", ["Paystack", "Flutterwave", "Stripe"]],
    ["SMS Gateway"],
    ["API Keys"],
    ["Webhooks"],
    ["OAuth Connections"],
    ["Integration Logs"],
  ]],
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

const packages = ["ui", "auth", "permissions", "config", "database", "logger", "types", "utils"];

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

function normalizeChildren(moduleKey, children) {
  return children.map((child) => {
    const [label, nested = []] = Array.isArray(child) ? child : [child, []];
    const key = slugify(label);
    return {
      key,
      label,
      route: `/${moduleKey}/${key}`,
      permission: `${moduleKey}.${key}.view`,
      children: nested.map((nestedLabel) => {
        const nestedKey = slugify(nestedLabel);
        return {
          key: nestedKey,
          label: nestedLabel,
          route: `/${moduleKey}/${key}/${nestedKey}`,
          permission: `${moduleKey}.${key}.${nestedKey}.view`,
        };
      }),
    };
  });
}

const registry = modules.map(([key, label, children]) => ({
  key,
  label,
  route: `/${key}`,
  permission: `${key}.view`,
  children: normalizeChildren(key, children),
}));

const registryTs = `export type ModuleRegistryItem = {
  key: string;
  label: string;
  route: string;
  permission: string;
  children?: ModuleRegistryItem[];
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
    },
    ...(module.children ?? []).flatMap((child) => [
      {
        key: child.key,
        label: child.label,
        route: child.route,
        permission: child.permission,
      },
      ...(child.children ?? []).map((nestedChild) => ({
        key: nestedChild.key,
        label: nestedChild.label,
        route: nestedChild.route,
        permission: nestedChild.permission,
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
    `export const moduleKey = "${module.key}";\nexport const moduleLabel = "${module.label}";\n`,
  );

  writeFile(
    join("services", module.key, "index.ts"),
    `export const serviceDomain = "${module.key}";\n`,
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
- Social Publishing, not Social Publisher
- Workflow Engine, not Workflow Automation
- Security & Compliance, not Security
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
