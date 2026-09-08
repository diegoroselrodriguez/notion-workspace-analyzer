import type { TaskEvent } from "../../../domain/events/task-event.js";
import { TaskEventType } from "../../../domain/events/task-event.js";
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

  parse(comment: any): TaskEvent {

    const text = comment.rich_text
      .map((item: any) => item.plain_text)
      .join("");

    const target = comment.rich_text.find(
      (item: any) =>
        item.type === "mention" &&
        item.mention.type === "user"
    )?.plain_text.replace("@", "");

    return {
      type: TaskEventType.ASSIGNMENT,
      author: comment.display_name.resolved_name,
      target,
      text,
      createdAt: comment.created_time,
    };

  }

}