import { Timeline } from "./Timeline.js";
import {
  TimelineEventType,
  type TimelineEvent,
} from "./TimelineEvent.js";

import type { TaskEvent } from "../events/task-event.js";

export class TimelineBuilder {

  build(
    taskId: string,
    taskName: string,
    events: TaskEvent[],
  ): Timeline {

    const timelineEvents: TimelineEvent[] = events.map(event => ({

      type: this.toTimelineType(event.type),

      author: event.author,

      createdAt: event.createdAt,

      text: event.text,

      ...(event.target
        ? { target: event.target }
        : {}),

    }));

    const ordered = timelineEvents.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() -
        new Date(b.createdAt).getTime(),
    );

    return new Timeline(
      taskId,
      taskName,
      ordered,
    );

  }

  private toTimelineType(
    type: TaskEvent["type"]
  ): TimelineEventType {

    switch (type) {

      case "ASSIGNMENT":
        return TimelineEventType.ASSIGNMENT;

      case "DELIVERY":
        return TimelineEventType.DELIVERY;

      case "PUBLICATION_REQUEST":
        return TimelineEventType.PUBLICATION_REQUEST;

      case "PUBLICATION_COMPLETED":
        return TimelineEventType.PUBLICATION_COMPLETED;

      case "REVIEW_REQUEST":
        return TimelineEventType.REVIEW_REQUEST;

      case "REVIEW_COMPLETED":
        return TimelineEventType.REVIEW_COMPLETED;

      default:
        return TimelineEventType.COMMENT;

    }

  }

}