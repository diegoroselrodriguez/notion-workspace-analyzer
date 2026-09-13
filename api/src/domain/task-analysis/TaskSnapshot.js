import { TaskStatus } from "../task-status/TaskStatus.js";
export class TaskSnapshot {
    taskId;
    taskName;
    currentAssignee;
    status;
    lastActivityAt;
    totalEvents;
    leadTime;
    inactiveDays;
    constructor(taskId, taskName, currentAssignee, status, lastActivityAt, totalEvents, leadTime, inactiveDays) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.currentAssignee = currentAssignee;
        this.status = status;
        this.lastActivityAt = lastActivityAt;
        this.totalEvents = totalEvents;
        this.leadTime = leadTime;
        this.inactiveDays = inactiveDays;
    }
}
//# sourceMappingURL=TaskSnapshot.js.map