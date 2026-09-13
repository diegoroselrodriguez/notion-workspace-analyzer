import type { TaskEvent } from "../../../domain/events/task-event.js";
import type { CommentContext } from "../../../domain/comments/CommentContext.js";
export interface CommentRule {
    matches(context: CommentContext): boolean;
    parse(context: CommentContext): TaskEvent;
}
//# sourceMappingURL=comment-rule.d.ts.map