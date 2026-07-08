import { flattenRegistry } from "./registry.loader";

export function getBreadcrumbs(route: string) {
  const item = flattenRegistry().find((entry) => entry.route === route);
  return item?.breadcrumb ?? [];
}
