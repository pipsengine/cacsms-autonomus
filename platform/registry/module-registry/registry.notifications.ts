import { flattenRegistry } from "./registry.loader";

export function getNotificationCategories() {
  return flattenRegistry().map((item) => ({
    id: item.id,
    category: item.notificationCategory,
    route: item.route,
    permission: item.permission,
  }));
}
