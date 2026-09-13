import type { TimelineEvent } from "./TimelineEvent.js";
export declare class Timeline {
    readonly taskId: string;
    readonly taskName: string;
    readonly events: TimelineEvent[];
    constructor(taskId: string, taskName: string, events: TimelineEvent[]);
    get participants(): string[];
}
//# sourceMappingURL=Timeline.d.ts.map