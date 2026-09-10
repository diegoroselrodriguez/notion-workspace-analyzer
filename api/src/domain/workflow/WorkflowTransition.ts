import { TaskEventType } from "../events/task-event.js";
import { TaskStatus } from "../task-status/TaskStatus.js";

export interface WorkflowTransition {
  from: TaskStatus;
  event: TaskEventType;
  to: TaskStatus;
}