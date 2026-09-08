import type { TaskEvent } from "../../domain/events/task-event.js";
import { TaskEventType } from "../../domain/events/task-event.js";

import { AssignmentRule } from "./rules/assignment.rule.js";

export class CommentEventParser {
  private rules = [
    new AssignmentRule(),
  ];

  parse(comment: any): TaskEvent {
    const text = comment.rich_text
      .map((item: any) => item.plain_text)
      .join("");

    for (const rule of this.rules) {
      if (rule.matches(text)) {
        return rule.parse(comment);
      }
    }

    return {
      type: TaskEventType.COMMENT,
      author: comment.display_name?.resolved_name ?? "Unknown",
      text,
      createdAt: comment.created_time,
    };

  }

}