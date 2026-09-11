import type { TimelineEvent } from "./TimelineEvent.js";

export class Timeline {

  constructor(
    public readonly taskId: string,
    public readonly taskName: string,
    public readonly events: TimelineEvent[],
  ) {}

  get participants(): string[] {

    return [
      ...new Set(
        this.events.map(e => e.author),
      ),
    ];

  }

}