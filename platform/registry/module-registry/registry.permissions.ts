import { REGISTRY_PERMISSION_ACTIONS } from "./registry.constants";
import { flattenRegistry } from "./registry.loader";
import type { RegistryPermission } from "./registry.types";

export function getPermissionMap(): readonly RegistryPermission[] {
  return flattenRegistry().flatMap((item) =>
    REGISTRY_PERMISSION_ACTIONS.map((action) => ({
      key: item.id,
      label: item.label,
      route: item.route,
      action,
      permission: item.permissionNamespace + "." + action,
      namespace: item.permissionNamespace,
    })),
  );
}
