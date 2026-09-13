import type { CommentContext } from "../../../domain/comments/CommentContext.js";
import type { TaskEvent } from "../../../domain/events/task-event.js";
import type { CommentRule } from "./comment-rule.js";
export declare class PublicationCompletedRule implements CommentRule {
    matches(context: CommentContext): boolean;
    parse(context: CommentContext): TaskEvent;
}
//# sourceMappingURL=publication-completed.rule.d.ts.map