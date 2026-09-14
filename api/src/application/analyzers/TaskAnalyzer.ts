import { Task } from "../../domain/task/Task.js";
import { TaskSnapshot } from "../../domain/task-analysis/TaskSnapshot.js";
import { TaskStatus } from "../../domain/task-status/TaskStatus.js";

import type { TaskResolver } from "./TaskResolver.js";

import { TaskAttentionResolver } from "./resolvers/TaskAttentionResolver.js";

export class TaskAnalyzer {

  constructor(
    private currentAssigneeResolver: TaskResolver<string | null>,
    private workflowStatusResolver: TaskResolver<TaskStatus>,
    private leadTimeResolver: TaskResolver<number | null>,
    private inactiveDaysResolver: TaskResolver<number | null>,
  ) {}

  analyze(task: Task): TaskSnapshot {

    const status =
      this.workflowStatusResolver.resolve(task);

    const inactiveDays =
      this.inactiveDaysResolver.resolve(task);

    const attention =
      new TaskAttentionResolver().resolve(
        status,
        inactiveDays
      );

    return new TaskSnapshot(
      task.id,
      task.name,
      this.currentAssigneeResolver.resolve(task),
      status,
      task.events.at(-1)?.createdAt ?? null,
      task.events.length,
      this.leadTimeResolver.resolve(task),
      inactiveDays,
      attention,
    );

  }

}