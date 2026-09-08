import { Timeline } from "./Timeline.js";
import type { TaskEvent } from "../events/task-event.js";

export class TimelineBuilder {

  build(
    taskId: string,
    taskName: string,
    events: TaskEvent[],
  ): Timeline {

    const ordered = [...events].sort(
      (a, b) =>
        new Date(a.createdAt).getTime() -
        new Date(b.createdAt).getTime(),
    );

    return new Timeline(
      taskId,
      taskName,
      ordered,
    );
  }

}