import type { CommentContext } from "../../../domain/comments/CommentContext.js";
import type { TaskEvent } from "../../../domain/events/task-event.js";
import { TaskEventType } from "../../../domain/events/task-event.js";

import type { Rule } from "../../rules/Rule.js";

export class DeliveryRule implements Rule {

  matches(context: CommentContext): boolean {

    const text = context.text.toLowerCase();

    return (
      text.includes("aquí tienes") ||
      text.includes("aqui tienes") ||
      text.includes("aquí os dejo") ||
      text.includes("aqui os dejo") ||
      text.includes("ya tienes") ||
      text.includes("os dejo")
    );

  }

  parse(context: CommentContext): TaskEvent {

    return {
      type: TaskEventType.DELIVERY,
      author: context.author,
      text: context.text,
      createdAt: context.createdAt,
    };

  }

}