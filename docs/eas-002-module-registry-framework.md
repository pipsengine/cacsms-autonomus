# EAS-002 Enterprise Module Registry Framework

The Module Registry is the operating system registry of CACSMS Autonomous.

Every module, page, workflow, service, permission, sidebar item, route, API namespace, documentation entry, search index, and workspace must originate from the registry.

## Golden Rule

Sidebar, route, folder, service, permission, workflow, database domain, documentation, and API namespace must share the same canonical naming.

## Generated Framework

The permanent registry service is generated under `platform/registry/module-registry` and includes:

- `registry.ts`
- `registry.schema.ts`
- `registry.validator.ts`
- `registry.loader.ts`
- `registry.search.ts`
- `registry.permissions.ts`
- `registry.sidebar.ts`
- `registry.routes.ts`
- `registry.breadcrumbs.ts`
- `registry.dashboard.ts`
- `registry.workspaces.ts`
- `registry.commands.ts`
- `registry.documentation.ts`
- `registry.audit.ts`
- `registry.notifications.ts`
- `registry.types.ts`
- `registry.constants.ts`
- `index.ts`

## Governance

Do not hardcode routes, permissions, sidebar items, breadcrumbs, search entries, command palette entries, audit categories, notification categories, or documentation records outside the registry framework.

Adding a platform surface starts with one registry entry. The generated framework then provides navigation, routing, permissions, search, commands, breadcrumbs, dashboards, workspaces, documentation, audit, and notifications.
