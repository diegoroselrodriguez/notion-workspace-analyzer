import type { TaskEvent } from "../../../domain/events/task-event.js";

export interface CommentRule {
    
  matches(text: string): boolean;
  parse(comment: any): TaskEvent;

}