import { flattenRegistry } from "./registry.loader";

export function getAuditCategories() {
  return flattenRegistry().map((item) => ({
    id: item.id,
    category: item.auditCategory,
    route: item.route,
    owner: item.owner,
  }));
}
