# Naming Convention

Canonical alignment:

- Sidebar Module = App Route = Module Folder = Backend Domain
- Module labels use Title Case.
- Routes and folders use kebab-case.
- Permissions use dot notation and end in `.view` for read access.

Example:

- Sidebar Page: Content Platform -> Monthly Planner
- Route: `/content-platform/monthly-planner`
- Folder: `modules/content-platform/pages/monthly-planner`
- Service: `services/content-platform/monthly-planner.service.ts`
- Permission: `content-platform.monthly-planner.view`

Every module contains:

```text
pages/
components/
forms/
tables/
cards/
dialogs/
hooks/
api/
services/
schemas/
types/
constants/
utils/
permissions/
workflows/
tests/
index.ts
```
