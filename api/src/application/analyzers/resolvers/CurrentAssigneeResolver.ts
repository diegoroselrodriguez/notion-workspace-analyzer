import type { TaskEvent } from "../../../domain/events/task-event.js";
import { TaskEventType } from "../../../domain/events/task-event.js";

export class CurrentAssigneeResolver {

  resolve(events: TaskEvent[]): string | null {

    let current: string | null = null;

    for (const event of events) {

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