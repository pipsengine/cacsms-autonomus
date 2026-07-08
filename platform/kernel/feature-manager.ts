export class FeatureManager {
  private readonly flags = new Map<string, boolean>();

  setFlag(key: string, enabled: boolean) {
    this.flags.set(key, enabled);
    return { key, enabled };
  }

  isEnabled(key: string) {
    return this.flags.get(key) ?? false;
  }
}
