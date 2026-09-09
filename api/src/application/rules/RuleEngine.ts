import type { Rule } from "./Rule.js";
import type { TaskEvent } from "../../domain/events/task-event.js";

export class RuleEngine {

  constructor(
    private readonly rules: Rule[],
  ) {}

  execute(
    text: string,
    comment: any,
  ): TaskEvent | null {

    for (const rule of this.rules) {

      if (rule.matches(text)) {

        return rule.parse(comment);

      }

    }

    return null;

  }

}