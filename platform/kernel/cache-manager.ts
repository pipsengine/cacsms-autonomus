export class CacheManager<T = unknown> {
  private readonly cache = new Map<string, T>();

  set(key: string, value: T) {
    this.cache.set(key, value);
    return value;
  }

  get(key: string) {
    return this.cache.get(key);
  }

  clear() {
    this.cache.clear();
  }
}
