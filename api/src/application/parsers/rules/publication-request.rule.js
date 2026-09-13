import { TaskEventType } from "../../../domain/events/task-event.js";
export class PublicationRequestRule {
    matches(context) {
        const text = context.text.toLowerCase();
        return (/\bpublica\b/.test(text) ||
            /\bpublicad\b/.test(text) ||
            /\bpublicar\b/.test(text));
    }
    parse(context) {
        return {
            type: TaskEventType.PUBLICATION_REQUEST,
            author: context.author,
            text: context.text,
            createdAt: context.createdAt,
        };
    }
}
//# sourceMappingURL=publication-request.rule.js.map