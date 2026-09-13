import { TaskStatus } from "../../../domain/task-status/TaskStatus.js";
import { WORKFLOW_TRANSITIONS } from "../../../domain/workflow/workflow.transitions.js";
export class WorkflowStatusResolver {
    resolve(task) {
        let status = TaskStatus.IN_PROGRESS;
        for (const event of task.events) {
            const transition = WORKFLOW_TRANSITIONS.find(t => t.from === status &&
                t.event === event.type);
            if (transition) {
                status = transition.to;
            }
        }
        return status;
    }
}
//# sourceMappingURL=WorkflowStatusResolver.js.map