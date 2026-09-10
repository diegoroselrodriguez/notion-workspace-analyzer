import type { TaskResolver } from "../TaskResolver.js";
import { Task } from "../../../domain/task/Task.js";
import { TaskEventType } from "../../../domain/events/task-event.js";

export class CurrentAssigneeResolver
  implements TaskResolver<string | null> {
  resolve(task: Task): string | null {
    let current: string | null = null;
    for (const event of task.events) {
      if (
        event.type === TaskEventType.ASSIGNMENT &&
        event.target
      ) {
        current = event.target;
      }
    }
    return current;
  }

}