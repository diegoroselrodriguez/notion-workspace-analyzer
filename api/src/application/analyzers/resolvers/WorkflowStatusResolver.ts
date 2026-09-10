import type { TaskResolver } from "../TaskResolver.js";
import type { Task } from "../../../domain/task/Task.js";
import { TaskStatus } from "../../../domain/task-status/TaskStatus.js";
import { WORKFLOW_TRANSITIONS } from "../../../domain/workflow/workflow.transitions.js";

export class WorkflowStatusResolver implements TaskResolver<TaskStatus> {

  resolve(task: Task): TaskStatus {

    let status = TaskStatus.IN_PROGRESS;

    for (const event of task.events) {

      const transition = WORKFLOW_TRANSITIONS.find(t =>
        t.from === status &&
        t.event === event.type,
      );

      if (transition) {
        status = transition.to;
      }

    }

    return status;

  }

}