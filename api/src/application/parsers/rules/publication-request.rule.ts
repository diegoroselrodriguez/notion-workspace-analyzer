import type { CommentContext } from "../../../domain/comments/CommentContext.js";
import type { TaskEvent } from "../../../domain/events/task-event.js";
import { TaskEventType } from "../../../domain/events/task-event.js";

import type { Rule } from "../../rules/Rule.js";

export class PublicationRequestRule implements Rule {

  matches(context: CommentContext): boolean {

    const text = context.text.toLowerCase();

    return (
      /\bpublica\b/.test(text) ||
      /\bpublicad\b/.test(text) ||
      /\bpublicar\b/.test(text)
    );

  }

  parse(context: CommentContext): TaskEvent {

    return {
      type: TaskEventType.PUBLICATION_REQUEST,
      author: context.author,
      text: context.text,
      createdAt: context.createdAt,
    };

  }

}