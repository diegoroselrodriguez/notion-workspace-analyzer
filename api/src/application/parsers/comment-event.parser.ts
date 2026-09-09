import type { TaskEvent } from "../../domain/events/task-event.js";
import { TaskEventType } from "../../domain/events/task-event.js";
import type { CommentContext } from "../../domain/comments/CommentContext.js";
import { AssignmentRule } from "./rules/assignment.rule.js";

export class CommentEventParser {
  private rules = [
    new AssignmentRule(),
  ];

  parse(comment: CommentContext): TaskEvent {
    const text = comment.text;

    for (const rule of this.rules) {
      if (rule.matches(text)) {
        return rule.parse(comment);
      }
    }

    return {
      type: TaskEventType.COMMENT,
      author: comment.author,
      text,
      createdAt: comment.createdAt,
    };

  }

}