export class ConfigurationManager {
  private readonly values = new Map<string, string>();

  load(values: Record<string, string | undefined> = {}) {
    for (const [key, value] of Object.entries(values)) {
      if (value !== undefined) this.values.set(key, value);
    }
    return this.snapshot();
  }

  get(key: string) {
    return this.values.get(key);
  }

  snapshot() {
    return Object.fromEntries(this.values);
  }
}
