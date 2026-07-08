import { loadModuleRegistry } from "./registry.loader";

export function getDashboardRegistry() {
  return loadModuleRegistry().map((item) => ({
    id: item.id,
    label: item.label,
    route: item.route,
    dashboardType: item.dashboardType,
    defaultChildPage: item.defaultChildPage,
    widgets: ["health", "activity", "decisions", "exceptions", "recommendations"],
  }));
}
