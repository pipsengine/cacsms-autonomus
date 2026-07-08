import { flattenRegistry } from "./registry.loader";

export function getWorkspaceRegistry() {
  return flattenRegistry().map((item) => ({
    id: item.id,
    label: item.label,
    route: item.route,
    workspaceType: item.workspaceType,
    visibilityRules: item.visibilityRules,
    supportedRoles: item.supportedRoles,
  }));
}
