import { Task } from "../../domain/task/Task.js";
import { TaskSnapshot } from "../../domain/task-analysis/TaskSnapshot.js";
import { CurrentAssigneeResolver } from "./resolvers/CurrentAssigneeResolver.js";

export class TaskAnalyzer {

  private currentAssigneeResolver = new CurrentAssigneeResolver();

  analyze(task: Task): TaskSnapshot {

    return new TaskSnapshot(
      task.id,
      task.name,
      this.currentAssigneeResolver.resolve(task.events),
      task.status,
      task.events.at(-1)?.createdAt ?? "",
      task.events.length,
    );

  }

}