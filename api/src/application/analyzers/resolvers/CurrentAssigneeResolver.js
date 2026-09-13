import { Task } from "../../../domain/task/Task.js";
import { TaskEventType } from "../../../domain/events/task-event.js";
export class CurrentAssigneeResolver {
    resolve(task) {
        let current = null;
        for (const event of task.events) {
            if (event.type === TaskEventType.ASSIGNMENT &&
                event.target) {
                current = event.target;
            }
        }
        return current;
    }
}
//# sourceMappingURL=CurrentAssigneeResolver.js.map