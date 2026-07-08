# Enterprise Navigation Framework

This is the permanent navigation architecture standard for CACSMS Autonomous.

## Hierarchy

```text
Platform
Main Module
Sub Module
Workspace Page
Business Functions
Dialogs
Actions
```

Never skip hierarchy levels.

## Golden Rules

- Parent modules are executive dashboards.
- Child pages are operational workspaces.
- Parent pages must never become navigation pages.
- Child pages must never live inside parent pages as cards, lists, menus, or tables.
- Sidebar is the primary navigation system.
- Every child page requires its own route, permission, breadcrumb, layout, title, description, and workspace.
- Sidebar structure mirrors route, module folder, service, permission, workflow namespace, database domain, and documentation.
- Every page has one purpose.
- Every workspace is self-contained.
- Sidebar must be hierarchical and generated from `MODULE_REGISTRY`.
- No duplicate navigation.
- Parent dashboards answer executive questions.
- Child workspaces answer operational questions.
- Global search and command palette are shortcuts only; they do not replace sidebar navigation.
- Navigation state persists across sessions.
- Navigation must support role, permission, workspace, organization, feature flag, subscription, responsive behavior, unlimited nesting, plugin modules, and future modules.

## Registry Contract

Every navigation item includes:

- `key`
- `label`
- `parentKey`
- `icon`
- `route`
- `permission`
- `description`
- `featureFlag`
- `status`
- `order`
- `visibilityRules`
- `children`

## Pull Request Checklist

- Parent page is executive dashboard.
- Child page is operational workspace.
- Sidebar contains navigation.
- Parent page does not contain child navigation.
- Route exists.
- Permission exists.
- Breadcrumb exists.
- Module Registry updated.
- Folder structure aligned.
- Service aligned.
- Workflow aligned.
- Documentation updated.

Implementation is rejected if any requirement fails.
