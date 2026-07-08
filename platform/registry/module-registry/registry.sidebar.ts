import { loadModuleRegistry } from "./registry.loader";

export function getSidebarItems() {
  return loadModuleRegistry().filter((item) => item.status === "active");
}
