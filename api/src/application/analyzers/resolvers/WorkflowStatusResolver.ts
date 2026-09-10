import type { TaskResolver } from "../TaskResolver.js";
import type { Task } from "../../../domain/task/Task.js";
import { TaskStatus } from "../../../domain/task-status/TaskStatus.js";
import { TaskEventType } from "../../../domain/events/task-event.js";

export class WorkflowStatusResolver
  implements TaskResolver<TaskStatus> {

  resolve(task: Task): TaskStatus {
    
    let status = TaskStatus.IN_PROGRESS;
    for (const event of task.events) {
      switch (event.type) {
        case TaskEventType.PUBLICATION_COMPLETED:
          status = TaskStatus.PUBLISHED;
          break;
      }
    }
    return status;
  }
}