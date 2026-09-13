import type { CommentContext } from "../../../domain/comments/CommentContext.js";
import type { TaskEvent } from "../../../domain/events/task-event.js";
import type { Rule } from "../../rules/Rule.js";
export declare class DeliveryRule implements Rule {
    matches(context: CommentContext): boolean;
    parse(context: CommentContext): TaskEvent;
}
//# sourceMappingURL=delivery.rule.d.ts.map