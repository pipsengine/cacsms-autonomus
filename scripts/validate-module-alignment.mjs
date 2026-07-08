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
