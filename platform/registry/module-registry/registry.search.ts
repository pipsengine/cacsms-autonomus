import { flattenRegistry } from "./registry.loader";

export function getSearchIndex() {
  return flattenRegistry().map((item) => ({
    id: item.id,
    title: item.label,
    route: item.route,
    description: item.description,
    keywords: [...item.searchKeywords, ...item.searchAliases, ...item.tags],
  }));
}

export function searchRegistry(query: string) {
  const normalized = query.toLowerCase().trim();
  if (!normalized) return getSearchIndex();

  return getSearchIndex().filter((item) =>
    [item.title, item.route, item.description, ...item.keywords].some((value) => value.toLowerCase().includes(normalized)),
  );
}
