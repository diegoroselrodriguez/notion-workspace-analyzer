import { TaskEventType } from "../events/task-event.js";
import { TaskStatus } from "../task-status/TaskStatus.js";
import type { WorkflowTransition } from "./WorkflowTransition.js";

export const WORKFLOW_TRANSITIONS: WorkflowTransition[] = [
  {
    from: TaskStatus.IN_PROGRESS,
    event: TaskEventType.DELIVERY,
    to: TaskStatus.READY_TO_PUBLISH,
  },
  {
    from: TaskStatus.READY_TO_PUBLISH,
    event: TaskEventType.PUBLICATION_REQUEST,
    to: TaskStatus.PENDING_PUBLICATION,
  },
  {
    from: TaskStatus.READY_TO_PUBLISH,
    event: TaskEventType.PUBLICATION_COMPLETED,
    to: TaskStatus.PUBLISHED,
  },
  {
    from: TaskStatus.PENDING_PUBLICATION,
    event: TaskEventType.PUBLICATION_COMPLETED,
    to: TaskStatus.PUBLISHED,
  },
  {
    from: TaskStatus.IN_PROGRESS,
    event: TaskEventType.PUBLICATION_COMPLETED,
    to: TaskStatus.PUBLISHED,
  },
];