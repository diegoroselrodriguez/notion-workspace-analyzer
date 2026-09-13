import { TaskEventType } from "../../../domain/events/task-event.js";
export class PublicationCompletedRule {
    matches(context) {
        const text = context.text.toLowerCase();
        return (/\bpublicado\b/.test(text) ||
            /\bpublicada\b/.test(text) ||
            /\bpublicados\b/.test(text) ||
            /\bpublicadas\b/.test(text) ||
            text.includes("ya está online") ||
            text.includes("ya esta online") ||
            text.includes("actualizado") ||
            text.includes("actualizada"));
    }
    parse(context) {
        return {
            type: TaskEventType.PUBLICATION_COMPLETED,
            author: context.author,
            text: context.text,
            createdAt: context.createdAt,
        };
    }
}
//# sourceMappingURL=publication-completed.rule.js.map