export type RegistryStatus = "active" | "beta" | "planned" | "disabled";
export type RegistryModuleType =
  | "parent-module"
  | "workspace"
  | "dashboard"
  | "operational-page"
  | "settings-page"
  | "management-page"
  | "configuration-page"
  | "wizard"
  | "dialog"
  | "report"
  | "analytics"
  | "workflow"
  | "integration"
  | "administration"
  | "future";

export type RegistryVisibilityRules = {
  roles: readonly string[];
  permissions: readonly string[];
  organizations?: readonly string[];
  workspaces?: readonly string[];
};

export type ModuleRegistryItem = {
  id: string;
  key: string;
  parentId: string | null;
  parentKey: string | null;
  label: string;
  displayName: string;
  shortName: string;
  sidebarTitle: string;
  icon: string;
  sidebarIcon: string;
  route: string;
  folder: string;
  serviceFolder: string;
  permission: string;
  permissionNamespace: string;
  workflowNamespace: string;
  databaseDomain: string;
  apiNamespace: string;
  description: string;
  moduleType: RegistryModuleType;
  workspaceType: "executive-dashboard" | "operational-workspace";
  dashboardType: "executive" | "operational" | "none";
  searchKeywords: readonly string[];
  searchAliases: readonly string[];
  tags: readonly string[];
  featureFlag: string | null;
  subscriptionLevel: "standard" | "professional" | "enterprise";
  visibilityRules: RegistryVisibilityRules;
  supportedRoles: readonly string[];
  defaultLandingPage: string;
  defaultChildPage: string | null;
  breadcrumb: readonly { label: string; route: string }[];
  notificationCategory: string;
  auditCategory: string;
  status: RegistryStatus;
  order: number;
  version: string;
  owner: string;
  documentationRef: string;
  createdAt: string;
  updatedAt: string;
  deprecated: boolean;
  futureExtensions: Record<string, unknown>;
  children?: readonly ModuleRegistryItem[];
};

export type RegistryRoute = Pick<ModuleRegistryItem, "id" | "key" | "parentId" | "parentKey" | "label" | "route" | "permission" | "moduleType" | "workspaceType" | "order">;
export type RegistryPermissionAction = "view" | "create" | "update" | "delete" | "approve" | "execute" | "export" | "import" | "share" | "manage";
export type RegistryPermission = {
  key: string;
  label: string;
  route: string;
  action: RegistryPermissionAction;
  permission: string;
  namespace: string;
};
