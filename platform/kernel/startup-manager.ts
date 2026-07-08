import { assertValidModuleRegistry, getCommandPaletteItems, getPermissionMap, getRouteMap, getSidebarItems, getWorkspaceRegistry } from "../registry/module-registry";
import { ModuleLoader } from "./module-loader";
import type { KernelManager } from "./kernel-manager";

export const KERNEL_STARTUP_SEQUENCE = [
  "Load Configuration",
  "Load Module Registry",
  "Validate Registry",
  "Initialize Kernel",
  "Initialize Services",
  "Initialize Routing",
  "Initialize Permissions",
  "Initialize Workspaces",
  "Initialize Event Bus",
  "Initialize Cache",
  "Initialize Logging",
  "Initialize Monitoring",
  "Initialize Notifications",
  "Initialize Intelligence Runtime",
  "Initialize CACSMS Brain",
  "Load Modules",
  "Platform Ready",
] as const;

export class StartupManager {
  private latestSnapshot: Record<string, unknown> | null = null;

  constructor(private readonly kernel: KernelManager) {}

  run() {
    const registryValidation = assertValidModuleRegistry();
    const loader = new ModuleLoader();
    const modules = loader.load();

    this.kernel.services.register("module-loader", loader);
    this.kernel.services.register("routes", getRouteMap());
    this.kernel.services.register("permissions", getPermissionMap());
    this.kernel.services.register("workspaces", getWorkspaceRegistry());
    this.kernel.services.register("sidebar", getSidebarItems());
    this.kernel.services.register("commands", getCommandPaletteItems());

    for (const module of modules) {
      this.kernel.capabilities.register({
        key: module.key + ".open",
        label: "Open " + module.label,
        moduleKey: module.key,
        route: module.route,
      });
    }

    this.latestSnapshot = {
      sequence: KERNEL_STARTUP_SEQUENCE,
      registryValidation,
      moduleCount: modules.length,
      serviceCount: this.kernel.services.list().length,
      capabilityCount: this.kernel.capabilities.list().length,
      state: "ready",
    };

    this.kernel.health.record("platform-kernel", "online", "Startup sequence completed.");
    this.kernel.telemetry.capture("PlatformStartupCompleted", this.latestSnapshot);
    return this.latestSnapshot;
  }

  snapshot() {
    return this.latestSnapshot ?? this.run();
  }
}
