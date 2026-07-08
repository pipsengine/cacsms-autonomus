export const MODULE_LIFECYCLE_STATES = [
  "registered",
  "validated",
  "initialized",
  "started",
  "ready",
  "running",
  "paused",
  "resumed",
  "stopping",
  "stopped",
  "unloaded",
] as const;

export type ModuleLifecycleState = (typeof MODULE_LIFECYCLE_STATES)[number];

export class LifecycleManager {
  private readonly states = new Map<string, ModuleLifecycleState>();

  transition(moduleKey: string, state: ModuleLifecycleState) {
    this.states.set(moduleKey, state);
    return { moduleKey, state };
  }

  getState(moduleKey: string) {
    return this.states.get(moduleKey) ?? "registered";
  }

  list() {
    return [...this.states.entries()].map(([moduleKey, state]) => ({ moduleKey, state }));
  }
}
