export class Timeline {
    taskId;
    taskName;
    events;
    constructor(taskId, taskName, events) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.events = events;
    }
    get participants() {
        return [
            ...new Set(this.events.map(e => e.author)),
        ];
    }
}
//# sourceMappingURL=Timeline.js.map