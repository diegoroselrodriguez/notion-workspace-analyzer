import type { TaskResolver } from "../TaskResolver.js";
import type { Task } from "../../../domain/task/Task.js";
import { TaskEventType } from "../../../domain/events/task-event.js";

export class LeadTimeResolver implements TaskResolver<number | null> {

  resolve(task: Task): number | null {

    const firstEvent = task.events.at(0);

    if (!firstEvent) {
      return null;
    }

    const publication = task.events.find(
      event => event.type === TaskEventType.PUBLICATION_COMPLETED,
    );

    if (!publication) {
      return null;
    }

    const start = new Date(firstEvent.createdAt);
    const end = new Date(publication.createdAt);

    return end.getTime() - start.getTime();

  }

}