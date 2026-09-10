import type { CommentContext } from "../../domain/comments/CommentContext.js";
import type { TaskEvent } from "../../domain/events/task-event.js";

export interface Rule {

  matches(context: CommentContext): boolean;

  parse(context: CommentContext): TaskEvent;

}