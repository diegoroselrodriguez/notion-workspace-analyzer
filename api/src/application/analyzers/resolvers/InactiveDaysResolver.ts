import type { TaskResolver } from "../TaskResolver.js";
import type { Task } from "../../../domain/task/Task.js";

export class InactiveDaysResolver implements TaskResolver<number | null> {

  resolve(task: Task): number | null {

    const lastEvent = task.events.at(-1);

    if (!lastEvent) {
      return null;
    }

    const lastActivity = new Date(lastEvent.createdAt);
    const now = new Date();

    const diffMs = now.getTime() - lastActivity.getTime();

    return Math.floor(diffMs / (1000 * 60 * 60 * 24));

  }

}