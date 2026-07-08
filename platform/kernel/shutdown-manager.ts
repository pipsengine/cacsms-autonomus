import type { KernelManager } from "./kernel-manager";

export class ShutdownManager {
  constructor(private readonly kernel: KernelManager) {}

  run() {
    const serviceCount = this.kernel.services.list().length;
    this.kernel.services.clear();
    this.kernel.capabilities.clear();
    this.kernel.health.record("platform-kernel", "offline", "Shutdown sequence completed.");

    return {
      state: "stopped",
      serviceCount,
    };
  }
}
