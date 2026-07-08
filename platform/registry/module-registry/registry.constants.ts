import type { RegistryPermissionAction } from "./registry.types";

export const REGISTRY_VERSION = "EAS-002.1.0";
export const REGISTRY_OWNER = "CACSMS Platform Architecture";
export const REGISTRY_CREATED_AT = "2026-07-08";
export const REGISTRY_UPDATED_AT = "2026-07-08";

export const REGISTRY_PERMISSION_ACTIONS = [
  "view",
  "create",
  "update",
  "delete",
  "approve",
  "execute",
  "export",
  "import",
  "share",
  "manage",
] as const satisfies readonly RegistryPermissionAction[];
