import { flattenRegistry } from "./registry.loader";

export function getDocumentationRegistry() {
  return flattenRegistry().map((item) => ({
    id: item.id,
    module: item.label,
    description: item.description,
    route: item.route,
    permission: item.permission,
    owner: item.owner,
    api: item.apiNamespace,
    database: item.databaseDomain,
    services: item.serviceFolder,
    workflows: item.workflowNamespace,
    status: item.status,
    documentationRef: item.documentationRef,
  }));
}
