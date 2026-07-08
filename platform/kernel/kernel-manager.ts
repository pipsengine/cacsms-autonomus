import { EventBus } from "./event-bus";
import { StartupManager } from "./startup-manager";
import { ShutdownManager } from "./shutdown-manager";
import { ServiceRegistry } from "./service-registry";
import { CapabilityRegistry } from "./capability-registry";
import { HealthManager } from "./health-manager";
import { LoggingManager } from "./logging-manager";
import { TelemetryManager } from "./telemetry-manager";

export type KernelState = "created" | "starting" | "ready" | "running" | "stopping" | "stopped" | "failed";

export class KernelManager {
  readonly events = new EventBus();
  readonly services = new ServiceRegistry();
  readonly capabilities = new CapabilityRegistry();
  readonly health = new HealthManager();
  readonly logging = new LoggingManager();
  readonly telemetry = new TelemetryManager();
  readonly startup = new StartupManager(this);
  readonly shutdownManager = new ShutdownManager(this);
  state: KernelState = "created";

  start() {
    if (this.state === "ready" || this.state === "running") return this.startup.snapshot();
    this.state = "starting";
    try {
      const snapshot = this.startup.run();
      this.state = "ready";
      this.events.publish({ type: "PlatformReady", payload: snapshot });
      return snapshot;
    } catch (error) {
      this.state = "failed";
      this.events.publish({ type: "PlatformStartupFailed", payload: { error } });
      throw error;
    }
  }

  shutdown() {
    this.state = "stopping";
    const result = this.shutdownManager.run();
    this.state = "stopped";
    this.events.publish({ type: "PlatformStopped", payload: result });
    return result;
  }
}
