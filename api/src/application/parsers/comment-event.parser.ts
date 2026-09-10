import type { TaskEvent } from "../../domain/events/task-event.js";
import { TaskEventType } from "../../domain/events/task-event.js";

import type { CommentContext } from "../../domain/comments/CommentContext.js";

import { RuleEngine } from "../rules/RuleEngine.js";

import { AssignmentRule } from "./rules/assignment.rule.js";
import { PublicationRequestRule } from "./rules/publication-request.rule.js";
import { PublicationCompletedRule } from "./rules/publication-completed.rule.js";

export class CommentEventParser {

  private readonly engine = new RuleEngine([
    new AssignmentRule(),
    new PublicationRequestRule(),
    new PublicationCompletedRule(),
  ]);

  parse(context: CommentContext): TaskEvent {

    const event = this.engine.execute(context);

    if (event) {
      return event;
    }

    return {
      type: TaskEventType.COMMENT,
      author: context.author,
      text: context.text,
      createdAt: context.createdAt,
    };

  }

}