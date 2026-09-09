import type { TimelineEvent } from "../timeline/TimelineEvent.js";

export class Task {

  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly status: string | null,
    public readonly assignees: string[],
    public readonly events: TimelineEvent[],

  ) {}

}