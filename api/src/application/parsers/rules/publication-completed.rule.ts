import type { CommentContext } from "../../../domain/comments/CommentContext.js";
import type { TaskEvent } from "../../../domain/events/task-event.js";
import { TaskEventType } from "../../../domain/events/task-event.js";

import type { CommentRule } from "./comment-rule.js";

export class PublicationCompletedRule implements CommentRule {

  matches(context: CommentContext): boolean {

    const text = context.text.toLowerCase();

    return (
      text.includes("publicado") ||
      text.includes("publicada") ||
      text.includes("ya está online") ||
      text.includes("ya esta online") ||
      text.includes("actualizado")
    );

  }

  parse(context: CommentContext): TaskEvent {

    return {
      type: TaskEventType.PUBLICATION_COMPLETED,
      author: context.author,
      text: context.text,
      createdAt: context.createdAt,
    };

  }

}