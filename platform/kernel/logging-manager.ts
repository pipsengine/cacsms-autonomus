export type LogEntry = {
  level: "info" | "warn" | "error";
  message: string;
  createdAt: string;
};

export class LoggingManager {
  private readonly entries: LogEntry[] = [];

  log(level: LogEntry["level"], message: string) {
    const entry = { level, message, createdAt: new Date().toISOString() };
    this.entries.push(entry);
    return entry;
  }

  list() {
    return this.entries;
  }
}
