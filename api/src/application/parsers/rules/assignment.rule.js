import { TaskEventType } from "../../../domain/events/task-event.js";
export class AssignmentRule {
    matches(context) {
        const text = context.text.toLowerCase();
        return (text.includes("lo hace") ||
            text.includes("se encargará") ||
            text.includes("se encargara"));
    }
    parse(context) {
        const target = context.mentions[0]?.name;
        const event = {
            type: TaskEventType.ASSIGNMENT,
            author: context.author,
            text: context.text,
            createdAt: context.createdAt,
        };
        if (target) {
            event.target = target;
        }
        return event;
    }
}
//# sourceMappingURL=assignment.rule.js.map