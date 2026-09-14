import type { TaskResolver } from "../TaskResolver.js";
import type { Task } from "../../../domain/task/Task.js";

import { TaskStatus } from "../../../domain/task-status/TaskStatus.js";
import { TaskEventType } from "../../../domain/events/task-event.js";
import { WORKFLOW_TRANSITIONS } from "../../../domain/workflow/workflow.transitions.js";

export class WorkflowStatusResolver
  implements TaskResolver<TaskStatus> {

  resolve(task: Task): TaskStatus {

    if (task.events.length === 0) {
      return TaskStatus.NEW;
    }

    let status = TaskStatus.IN_PROGRESS;

    for (const event of task.events) {

      if (
        status === TaskStatus.PUBLISHED &&
        this.reopensProject(event.type)
      ) {
        status = TaskStatus.IN_PROGRESS;
      }

      const transition =
        WORKFLOW_TRANSITIONS.find(
          transition =>
            transition.from === status &&
            transition.event === event.type
        );

      if (transition) {
        status = transition.to;
      }

    }

    return status;

  }

  private reopensProject(
    eventType: TaskEventType
  ): boolean {

    return [
      TaskEventType.COMMENT,
      TaskEventType.ASSIGNMENT,
      TaskEventType.DELIVERY,
      TaskEventType.REVIEW_REQUEST,
    ].includes(eventType);

  }

}