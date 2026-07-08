export type TelemetryRecord = {
  name: string;
  payload?: unknown;
  capturedAt: string;
};

export class TelemetryManager {
  private readonly records: TelemetryRecord[] = [];

  capture(name: string, payload?: unknown) {
    const record = { name, payload, capturedAt: new Date().toISOString() };
    this.records.push(record);
    return record;
  }

  list() {
    return this.records;
  }
}
