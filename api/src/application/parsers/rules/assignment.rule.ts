import type { TaskEvent } from "../../../domain/events/task-event.js";
import { TaskEventType } from "../../../domain/events/task-event.js";
import type { CommentContext } from "../../../domain/comments/CommentContext.js";
import type { CommentRule } from "./comment-rule.js";

export class AssignmentRule implements CommentRule {

  matches(text: string): boolean {

    const t = text.toLowerCase();

    return (
      t.includes("lo hace") ||
      t.includes("se encargará") ||
      t.includes("se encargara")
    );

  }

  parse(context: CommentContext): TaskEvent {

    const target = context.mentions[0]?.name;

    const event: TaskEvent = {
      type: TaskEventType.ASSIGNMENT,
      author: context.author,
      text: context.text,
      createdAt: context.createdAt,
    };

    if (target) {
      event.target = target;
    }

    return event;

  }

}