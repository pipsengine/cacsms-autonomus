import { loadModuleRegistry } from "../registry/module-registry";

export class ModuleLoader {
  discover() {
    return loadModuleRegistry();
  }

  load() {
    return this.discover().filter((module) => module.status === "active");
  }
}
