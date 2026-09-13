import type { TaskEvent } from "../../domain/events/task-event.js";
import type { CommentContext } from "../../domain/comments/CommentContext.js";
export declare class CommentEventParser {
    private readonly engine;
    parse(context: CommentContext): TaskEvent;
}
//# sourceMappingURL=comment-event.parser.d.ts.map