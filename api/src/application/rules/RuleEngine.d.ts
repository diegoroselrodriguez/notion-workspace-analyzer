import type { CommentContext } from "../../domain/comments/CommentContext.js";
import type { TaskEvent } from "../../domain/events/task-event.js";
import type { Rule } from "./Rule.js";
export declare class RuleEngine {
    private readonly rules;
    constructor(rules: Rule[]);
    execute(context: CommentContext): TaskEvent | null;
}
//# sourceMappingURL=RuleEngine.d.ts.map