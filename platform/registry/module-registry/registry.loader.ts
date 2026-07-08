import { MODULE_REGISTRY } from "./registry";
import type { ModuleRegistryItem } from "./registry.types";

export function loadModuleRegistry(): readonly ModuleRegistryItem[] {
  return MODULE_REGISTRY;
}

export function flattenRegistry(items: readonly ModuleRegistryItem[] = MODULE_REGISTRY): readonly ModuleRegistryItem[] {
  return items.flatMap((item) => [item, ...flattenRegistry(item.children ?? [])]);
}

export function findRegistryItemByRoute(route: string) {
  return flattenRegistry().find((item) => item.route === route);
}

export function findRegistryItemByKey(key: string) {
  return flattenRegistry().find((item) => item.key === key || item.id === key);
}
