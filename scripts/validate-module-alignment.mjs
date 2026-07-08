import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const registrySource = readFileSync(join("packages", "config", "src", "module-registry.ts"), "utf8");
const registryMatch = registrySource.match(/export const MODULE_REGISTRY = ([\s\S]*?) as const satisfies/);

if (!registryMatch) {
  throw new Error("Could not find MODULE_REGISTRY in packages/config/src/module-registry.ts");
}

const registry = JSON.parse(registryMatch[1]);
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

const requiredPaths = [
  ["docs", "sidebar-structure.md"],
  ["docs", "routing-map.md"],
  ["docs", "module-registry.md"],
  ["docs", "naming-convention.md"],
  ["docs", "eas-002-module-registry-framework.md"],
  ["docs", "eas-003-platform-kernel.md"],
  ["platform", "kernel", "kernel.ts"],
  ["platform", "kernel", "kernel-manager.ts"],
  ["platform", "kernel", "lifecycle-manager.ts"],
  ["platform", "kernel", "startup-manager.ts"],
  ["platform", "kernel", "shutdown-manager.ts"],
  ["platform", "kernel", "module-loader.ts"],
  ["platform", "kernel", "service-registry.ts"],
  ["platform", "kernel", "capability-registry.ts"],
  ["platform", "kernel", "execution-context.ts"],
  ["platform", "kernel", "request-context.ts"],
  ["platform", "kernel", "workspace-context.ts"],
  ["platform", "kernel", "tenant-context.ts"],
  ["platform", "kernel", "organization-context.ts"],
  ["platform", "kernel", "dependency-manager.ts"],
  ["platform", "kernel", "configuration-manager.ts"],
  ["platform", "kernel", "plugin-manager.ts"],
  ["platform", "kernel", "feature-manager.ts"],
  ["platform", "kernel", "telemetry-manager.ts"],
  ["platform", "kernel", "diagnostics-manager.ts"],
  ["platform", "kernel", "logging-manager.ts"],
  ["platform", "kernel", "health-manager.ts"],
  ["platform", "kernel", "event-bus.ts"],
  ["platform", "kernel", "scheduler.ts"],
  ["platform", "kernel", "queue-manager.ts"],
  ["platform", "kernel", "cache-manager.ts"],
  ["platform", "kernel", "recovery-manager.ts"],
  ["platform", "kernel", "monitoring-manager.ts"],
  ["platform", "kernel", "security-context.ts"],
  ["platform", "kernel", "index.ts"],
  ["platform", "registry", "module-registry", "registry.ts"],
  ["platform", "registry", "module-registry", "registry.schema.ts"],
  ["platform", "registry", "module-registry", "registry.validator.ts"],
  ["platform", "registry", "module-registry", "registry.loader.ts"],
  ["platform", "registry", "module-registry", "registry.search.ts"],
  ["platform", "registry", "module-registry", "registry.permissions.ts"],
  ["platform", "registry", "module-registry", "registry.sidebar.ts"],
  ["platform", "registry", "module-registry", "registry.routes.ts"],
  ["platform", "registry", "module-registry", "registry.breadcrumbs.ts"],
  ["platform", "registry", "module-registry", "registry.dashboard.ts"],
  ["platform", "registry", "module-registry", "registry.workspaces.ts"],
  ["platform", "registry", "module-registry", "registry.commands.ts"],
  ["platform", "registry", "module-registry", "registry.documentation.ts"],
  ["platform", "registry", "module-registry", "registry.audit.ts"],
  ["platform", "registry", "module-registry", "registry.notifications.ts"],
  ["platform", "registry", "module-registry", "registry.types.ts"],
  ["platform", "registry", "module-registry", "registry.constants.ts"],
  ["platform", "registry", "module-registry", "index.ts"],
];

for (const module of registry) {
  requiredPaths.push(["apps", "web", "app", module.key, "page.tsx"]);
  requiredPaths.push(["modules", module.key, "index.ts"]);
  requiredPaths.push(["services", module.key, "index.ts"]);

  for (const subdir of moduleSubdirs) {
    requiredPaths.push(["modules", module.key, subdir, ".gitkeep"]);
  }

  for (const child of module.children ?? []) {
    requiredPaths.push(["apps", "web", "app", module.key, child.key, "page.tsx"]);
    requiredPaths.push(["modules", module.key, "pages", child.key, "index.ts"]);
    requiredPaths.push(["services", module.key, `${child.key}.service.ts`]);

    for (const nestedChild of child.children ?? []) {
      requiredPaths.push(["apps", "web", "app", module.key, child.key, nestedChild.key, "page.tsx"]);
      requiredPaths.push(["modules", module.key, "pages", child.key, nestedChild.key, "index.ts"]);
      requiredPaths.push(["services", module.key, `${child.key}.${nestedChild.key}.service.ts`]);
    }
  }
}

const missingPaths = requiredPaths.map((parts) => join(...parts)).filter((path) => !existsSync(path));

if (missingPaths.length > 0) {
  console.error("Module alignment validation failed. Missing paths:");
  for (const path of missingPaths) {
    console.error(`- ${path}`);
  }
  process.exit(1);
}

console.log(`Module alignment validation passed for ${registry.length} modules and ${requiredPaths.length} required paths.`);
