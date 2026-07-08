import { flattenRegistry } from "./registry.loader";
import type { RegistryRoute } from "./registry.types";

export function getRouteMap(): readonly RegistryRoute[] {
  return flattenRegistry().map(({ id, key, parentId, parentKey, label, route, permission, moduleType, workspaceType, order }) => ({
    id,
    key,
    parentId,
    parentKey,
    label,
    route,
    permission,
    moduleType,
    workspaceType,
    order,
  }));
}
