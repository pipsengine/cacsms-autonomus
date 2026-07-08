import { flattenRegistry } from "./registry.loader";

export function getCommandPaletteItems() {
  return flattenRegistry().map((item) => ({
    id: "open-" + item.id,
    label: "Open " + item.label,
    route: item.route,
    permission: item.permission,
    type: item.moduleType,
  }));
}
