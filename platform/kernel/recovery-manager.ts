export class RecoveryManager {
  retry<T>(operation: () => T, attempts = 3): T {
    let lastError: unknown;
    for (let index = 0; index < attempts; index += 1) {
      try {
        return operation();
      } catch (error) {
        lastError = error;
      }
    }
    throw lastError;
  }

  circuitBreaker(open: boolean) {
    return { open, mode: open ? "graceful-degradation" : "normal" };
  }
}
