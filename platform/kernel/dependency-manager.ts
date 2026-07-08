export class DependencyManager {
  private readonly dependencies = new Map<string, readonly string[]>();

  register(key: string, dependencies: readonly string[] = []) {
    this.dependencies.set(key, dependencies);
    return { key, dependencies };
  }

  list() {
    return [...this.dependencies.entries()].map(([key, dependencies]) => ({ key, dependencies }));
  }
}
