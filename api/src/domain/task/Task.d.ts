import type { TaskEvent } from "../events/task-event.js";
export declare class Task {
    readonly id: string;
    readonly name: string;
    readonly status: string | null;
    readonly assignees: string[];
    readonly events: TaskEvent[];
    constructor(id: string, name: string, status: string | null, assignees: string[], events: TaskEvent[]);
}
//# sourceMappingURL=Task.d.ts.map