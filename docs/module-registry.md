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
- Creative Studio is the official flagship multimedia production module.
- Social Publishing, not Social Publisher
- Workflow Engine, not Workflow Automation
- Security & Compliance, not Security

Each registry item includes:

- `key`
- `label`
- `icon`
- `route`
- `permission`
- `description`
- `featureFlag`
- `status`
- `order`
- `visibilityRules`
