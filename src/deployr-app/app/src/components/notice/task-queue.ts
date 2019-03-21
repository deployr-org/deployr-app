import { Task } from './task';

export class TaskQueue {
  private currentTimer: number | null = null;
  private queue: Array<Task> = new Array<Task>();

  public get length(): number {
    return this.queue.length;
  }

  public add(item: Task): number {
    const length = this.queue.push(item);

    if (this.currentTimer != null) {
      return length;
    }

    this.start();

    return length;
  }
  public remove(item: Task): Task | null {
    const index = this.queue.indexOf(item);

    if (index < 0) {
      return null;
    }

    return this.queue.splice(index, 1)[0];
  }
  public start(): void {
    if (this.currentTimer != null) {
      return;
    }

    this.next();
  }
  public stop(): void {
    if (this.currentTimer != null) {
      clearTimeout(this.currentTimer);
    }
  }
  public clear(): void {
    this.stop();
    this.queue.length = 0;
  }
  private next(): void {
    if (this.currentTimer != null) {
      return;
    }

    const task = this.queue.shift();

    if (task == null) {
      this.clear();
      return;
    }

    this.currentTimer = setTimeout(() => {
      task.func();
      this.currentTimer = setTimeout(() => {
        this.currentTimer = null;
        this.next();
      // tslint:disable-next-line:align
      }, task.delay);
      // tslint:disable-next-line:align
    }, 0);
  }
}
