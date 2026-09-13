import { TaskStatus } from "../task-status/TaskStatus.js";
export declare class TaskSnapshot {
    readonly taskId: string;
    readonly taskName: string;
    readonly currentAssignee: string | null;
    readonly status: TaskStatus;
    readonly lastActivityAt: string | null;
    readonly totalEvents: number;
    readonly leadTime: number | null;
    readonly inactiveDays: number | null;
    constructor(taskId: string, taskName: string, currentAssignee: string | null, status: TaskStatus, lastActivityAt: string | null, totalEvents: number, leadTime: number | null, inactiveDays: number | null);
}
//# sourceMappingURL=TaskSnapshot.d.ts.map