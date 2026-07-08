export class MonitoringManager {
  sample() {
    return {
      sampledAt: new Date().toISOString(),
      performance: "nominal",
      healthScore: 100,
    };
  }
}
