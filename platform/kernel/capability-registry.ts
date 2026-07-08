export type CapabilityRegistration = {
  key: string;
  label: string;
  moduleKey: string;
  route?: string;
};

export class CapabilityRegistry {
  private readonly capabilities = new Map<string, CapabilityRegistration>();

  register(capability: CapabilityRegistration) {
    this.capabilities.set(capability.key, capability);
    return capability;
  }

  find(key: string) {
    return this.capabilities.get(key);
  }

  list() {
    return [...this.capabilities.values()];
  }

  clear() {
    this.capabilities.clear();
  }
}
