import { flattenRegistry, loadModuleRegistry } from "./registry.loader";

function duplicates(values: readonly string[]) {
  const seen = new Set<string>();
  const repeated = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) repeated.add(value);
    seen.add(value);
  }
  return [...repeated];
}

export function validateModuleRegistry() {
  const modules = loadModuleRegistry();
  const items = flattenRegistry(modules);
  const errors: string[] = [];
  const ids = new Set(items.map((item) => item.id));

  for (const item of items) {
    if (!item.id) errors.push("Missing id for " + item.route);
    if (!item.key) errors.push("Missing key for " + item.route);
    if (!item.route.startsWith("/")) errors.push("Invalid route for " + item.id);
    if (!item.permission.endsWith(".view")) errors.push("Missing view permission for " + item.id);
    if (item.parentId && !ids.has(item.parentId)) errors.push("Broken parent hierarchy for " + item.id);
    if (!item.folder || !item.serviceFolder) errors.push("Missing folder/service mapping for " + item.id);
    if (!item.owner) errors.push("Missing owner for " + item.id);
    if (!item.documentationRef) errors.push("Missing documentation reference for " + item.id);
  }

  for (const [label, values] of Object.entries({
    routes: items.map((item) => item.route),
    permissions: items.map((item) => item.permission),
    ids: items.map((item) => item.id),
  })) {
    for (const value of duplicates(values)) {
      errors.push("Duplicate " + label + ": " + value);
    }
  }

  return {
    ok: errors.length === 0,
    errors,
    moduleCount: modules.length,
    itemCount: items.length,
  };
}

export function assertValidModuleRegistry() {
  const result = validateModuleRegistry();
  if (!result.ok) {
    throw new Error("Module registry validation failed:\n" + result.errors.join("\n"));
  }
  return result;
}
