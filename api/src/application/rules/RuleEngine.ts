import type { CommentContext } from "../../domain/comments/CommentContext.js";
import type { TaskEvent } from "../../domain/events/task-event.js";
import type { Rule } from "./Rule.js";

export class RuleEngine {

  constructor(
    private readonly rules: Rule[],
  ) {}

  execute(
    context: CommentContext,
  ): TaskEvent | null {

    for (const rule of this.rules) {

      if (rule.matches(context)) {
        return rule.parse(context);
      }

    }

    return null;

  }

}