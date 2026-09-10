import type { TaskEvent } from "../../domain/events/task-event.js";
import { TaskEventType } from "../../domain/events/task-event.js";

import type { CommentContext } from "../../domain/comments/CommentContext.js";

import { AssignmentRule } from "./rules/assignment.rule.js";
import { PublicationCompletedRule } from "./rules/publication-completed.rule.js";

export class CommentEventParser {

  private rules = [
    new AssignmentRule(),
    new PublicationCompletedRule(),
  ];

  parse(context: CommentContext): TaskEvent {

    for (const rule of this.rules) {

      if (rule.matches(context)) {
        return rule.parse(context);
      }

    }

    return {
      type: TaskEventType.COMMENT,
      author: context.author,
      text: context.text,
      createdAt: context.createdAt,
    };

  }

}