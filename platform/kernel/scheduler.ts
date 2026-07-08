export type ScheduledTask = {
  key: string;
  cadence: string;
  enabled: boolean;
};

export class Scheduler {
  private readonly tasks = new Map<string, ScheduledTask>();

  schedule(task: ScheduledTask) {
    this.tasks.set(task.key, task);
    return task;
  }

  list() {
    return [...this.tasks.values()];
  }
}
