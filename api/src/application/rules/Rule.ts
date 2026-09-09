import type { TaskEvent } from "../../domain/events/task-event.js";

export interface Rule {

  matches(text: string): boolean;

  parse(comment: any): TaskEvent;

}