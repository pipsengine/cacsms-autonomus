export class DiagnosticsManager {
  inspect() {
    return {
      inspectedAt: new Date().toISOString(),
      status: "ok",
    };
  }
}
