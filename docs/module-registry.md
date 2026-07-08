# Module Registry

The registry lives at `packages/config/src/module-registry.ts`.

Development rule: no developer should create a new folder, route, permission, sidebar item, or breadcrumb unless it exists first in `MODULE_REGISTRY`.

Generated consumers:

- `getSidebarItems()`
- `getRouteMap()`
- `getPermissionMap()`
- `getBreadcrumbs(route)`

Official module names:

- Content Platform, not Content Studio
- Social Publishing, not Social Publisher
- Workflow Engine, not Workflow Automation
- Security & Compliance, not Security
