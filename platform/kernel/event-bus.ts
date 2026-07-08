export type PlatformEvent<T = unknown> = {
  type: string;
  payload?: T;
  occurredAt?: string;
};

export type EventHandler<T = unknown> = (event: PlatformEvent<T>) => void;

export class EventBus {
  private readonly handlers = new Map<string, Set<EventHandler>>();
  private readonly history: PlatformEvent[] = [];

  subscribe(type: string, handler: EventHandler) {
    const handlers = this.handlers.get(type) ?? new Set<EventHandler>();
    handlers.add(handler);
    this.handlers.set(type, handlers);
    return () => handlers.delete(handler);
  }

  publish<T>(event: PlatformEvent<T>) {
    const enriched = { ...event, occurredAt: event.occurredAt ?? new Date().toISOString() };
    this.history.push(enriched);
    for (const handler of this.handlers.get(event.type) ?? []) {
      handler(enriched);
    }
    return enriched;
  }

  listHistory() {
    return this.history;
  }
}
