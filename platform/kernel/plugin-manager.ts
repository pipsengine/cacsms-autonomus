export type PluginRegistration = {
  key: string;
  label: string;
  enabled: boolean;
};

export class PluginManager {
  private readonly plugins = new Map<string, PluginRegistration>();

  register(plugin: PluginRegistration) {
    this.plugins.set(plugin.key, plugin);
    return plugin;
  }

  list() {
    return [...this.plugins.values()];
  }
}
