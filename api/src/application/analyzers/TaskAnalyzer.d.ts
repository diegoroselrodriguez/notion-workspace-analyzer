import { Task } from "../../domain/task/Task.js";
import { TaskSnapshot } from "../../domain/task-analysis/TaskSnapshot.js";
import { TaskStatus } from "../../domain/task-status/TaskStatus.js";
import type { TaskResolver } from "./TaskResolver.js";
export declare class TaskAnalyzer {
    private currentAssigneeResolver;
    private workflowStatusResolver;
    private leadTimeResolver;
    private inactiveDaysResolver;
    constructor(currentAssigneeResolver: TaskResolver<string | null>, workflowStatusResolver: TaskResolver<TaskStatus>, leadTimeResolver: TaskResolver<number | null>, inactiveDaysResolver: TaskResolver<number | null>);
    analyze(task: Task): TaskSnapshot;
}
//# sourceMappingURL=TaskAnalyzer.d.ts.map