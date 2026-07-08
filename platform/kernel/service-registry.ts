export type RegisteredService<T = unknown> = {
  key: string;
  service: T;
  registeredAt: string;
};

export class ServiceRegistry {
  private readonly services = new Map<string, RegisteredService>();

  register<T>(key: string, service: T) {
    const record = { key, service, registeredAt: new Date().toISOString() };
    this.services.set(key, record);
    return record;
  }

  resolve<T>(key: string) {
    return this.services.get(key)?.service as T | undefined;
  }

  list() {
    return [...this.services.values()];
  }

  clear() {
    this.services.clear();
  }
}
