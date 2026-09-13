import { Timeline } from "./Timeline.js";
import { TimelineEventType, } from "./TimelineEvent.js";
export class TimelineBuilder {
    build(taskId, taskName, events) {
        const timelineEvents = events.map(event => ({
            type: this.toTimelineType(event.type),
            author: event.author,
            createdAt: event.createdAt,
            text: event.text,
            ...(event.target
                ? { target: event.target }
                : {}),
        }));
        const ordered = timelineEvents.sort((a, b) => new Date(a.createdAt).getTime() -
            new Date(b.createdAt).getTime());
        return new Timeline(taskId, taskName, ordered);
    }
    toTimelineType(type) {
        switch (type) {
            case "ASSIGNMENT":
                return TimelineEventType.ASSIGNMENT;
            case "DELIVERY":
                return TimelineEventType.DELIVERY;
            case "PUBLICATION_COMPLETED":
            case "PUBLICATION_REQUEST":
                return TimelineEventType.PUBLICATION;
            case "REVIEW_COMPLETED":
            case "REVIEW_REQUEST":
                return TimelineEventType.REVIEW;
            default:
                return TimelineEventType.COMMENT;
        }
    }
}
//# sourceMappingURL=TimelineBuilder.js.map