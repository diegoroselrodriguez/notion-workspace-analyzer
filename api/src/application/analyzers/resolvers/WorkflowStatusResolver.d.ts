import type { TaskResolver } from "../TaskResolver.js";
import type { Task } from "../../../domain/task/Task.js";
import { TaskStatus } from "../../../domain/task-status/TaskStatus.js";
export declare class WorkflowStatusResolver implements TaskResolver<TaskStatus> {
    resolve(task: Task): TaskStatus;
}
//# sourceMappingURL=WorkflowStatusResolver.d.ts.map