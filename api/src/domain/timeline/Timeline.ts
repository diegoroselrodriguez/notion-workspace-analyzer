import type { TaskEvent } from "../events/task-event.js";

export class Timeline {

  constructor(
    public readonly taskId: string,
    public readonly taskName: string,
    public readonly events: TaskEvent[],
  ) {}

}