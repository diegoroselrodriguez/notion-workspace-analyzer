import { Timeline } from "./Timeline.js";
import type { TaskEvent } from "../events/task-event.js";
export declare class TimelineBuilder {
    build(taskId: string, taskName: string, events: TaskEvent[]): Timeline;
    private toTimelineType;
}
//# sourceMappingURL=TimelineBuilder.d.ts.map