import { TaskEventType } from "../../../domain/events/task-event.js";
export class DeliveryRule {
    matches(context) {
        const text = context.text.toLowerCase();
        return (text.includes("aquí tienes") ||
            text.includes("aqui tienes") ||
            text.includes("aquí os dejo") ||
            text.includes("aqui os dejo") ||
            text.includes("ya tienes") ||
            text.includes("os dejo"));
    }
    parse(context) {
        return {
            type: TaskEventType.DELIVERY,
            author: context.author,
            text: context.text,
            createdAt: context.createdAt,
        };
    }
}
//# sourceMappingURL=delivery.rule.js.map