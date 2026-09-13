import { Task } from "../../domain/task/Task.js";
import { TaskSnapshot } from "../../domain/task-analysis/TaskSnapshot.js";
import { TaskStatus } from "../../domain/task-status/TaskStatus.js";
export class TaskAnalyzer {
    currentAssigneeResolver;
    workflowStatusResolver;
    leadTimeResolver;
    inactiveDaysResolver;
    constructor(currentAssigneeResolver, workflowStatusResolver, leadTimeResolver, inactiveDaysResolver) {
        this.currentAssigneeResolver = currentAssigneeResolver;
        this.workflowStatusResolver = workflowStatusResolver;
        this.leadTimeResolver = leadTimeResolver;
        this.inactiveDaysResolver = inactiveDaysResolver;
    }
    analyze(task) {
        return new TaskSnapshot(task.id, task.name, this.currentAssigneeResolver.resolve(task), this.workflowStatusResolver.resolve(task), task.events.at(-1)?.createdAt ?? null, task.events.length, this.leadTimeResolver.resolve(task), this.inactiveDaysResolver.resolve(task));
    }
}
//# sourceMappingURL=TaskAnalyzer.js.map