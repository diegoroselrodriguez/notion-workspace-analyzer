import { Task } from "../../domain/task/Task.js";
import { TaskSnapshot } from "../../domain/task-analysis/TaskSnapshot.js";
import { TaskStatus } from "../../domain/task-status/TaskStatus.js";
import type { TaskResolver } from "./TaskResolver.js";

export class TaskAnalyzer {
  constructor(
    private currentAssigneeResolver: TaskResolver<string | null>,
    private workflowStatusResolver: TaskResolver<TaskStatus>,
  ) {}

  analyze(task: Task): TaskSnapshot {

    return new TaskSnapshot(
      task.id,
      task.name,
      this.currentAssigneeResolver.resolve(task),
      this.workflowStatusResolver.resolve(task),
      task.events.at(-1)?.createdAt ?? null,
      task.events.length,
    );

  }

}