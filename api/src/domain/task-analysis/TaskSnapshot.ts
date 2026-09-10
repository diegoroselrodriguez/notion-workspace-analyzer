import { TaskStatus } from "../task-status/TaskStatus.js";

export class TaskSnapshot {

  constructor(
    public readonly taskId: string,
    public readonly taskName: string,
    public readonly currentAssignee: string | null,
    public readonly status: TaskStatus,
    public readonly lastActivityAt: string | null,
    public readonly totalEvents: number,
  ) {}

}