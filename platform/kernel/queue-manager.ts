export class QueueManager<T = unknown> {
  private readonly queues = new Map<string, T[]>();

  enqueue(queue: string, item: T) {
    const items = this.queues.get(queue) ?? [];
    items.push(item);
    this.queues.set(queue, items);
    return items.length;
  }

  dequeue(queue: string) {
    return this.queues.get(queue)?.shift();
  }

  size(queue: string) {
    return this.queues.get(queue)?.length ?? 0;
  }
}
