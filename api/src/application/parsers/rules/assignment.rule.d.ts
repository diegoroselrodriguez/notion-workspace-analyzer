import type { TaskEvent } from "../../../domain/events/task-event.js";
import type { CommentContext } from "../../../domain/comments/CommentContext.js";
import type { CommentRule } from "./comment-rule.js";
export declare class AssignmentRule implements CommentRule {
    matches(context: CommentContext): boolean;
    parse(context: CommentContext): TaskEvent;
}
//# sourceMappingURL=assignment.rule.d.ts.map