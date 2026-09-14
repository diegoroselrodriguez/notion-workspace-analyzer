import type { Timeline } from "../timeline/Timeline.js";
import { TimelineEventType } from "../timeline/TimelineEvent.js";
import type { ProjectSummary } from "./ProjectSummary.js";

export class ProjectAnalyzer {

  analyze(timeline: Timeline): ProjectSummary {

    const events = timeline.events;

    const participants = new Set(events.map(e => e.author));

    const assignments = events.filter(
      e => e.type === TimelineEventType.ASSIGNMENT,
    ).length;

    const deliveries = events.filter(
      e => e.type === TimelineEventType.DELIVERY,
    ).length;

    const publications = events.filter(
      e => e.type === TimelineEventType.PUBLICATION,
    ).length;

    const comments = events.filter(
      e => e.type === TimelineEventType.COMMENT,
    ).length;

    const firstActivity = events[0]?.createdAt ?? "";

    const lastActivity = events[events.length - 1]?.createdAt ?? "";

    const durationDays =
      firstActivity && lastActivity
        ? Math.ceil(
            (
              new Date(lastActivity).getTime() -
              new Date(firstActivity).getTime()
            ) /
            (1000 * 60 * 60 * 24),
          )
        : 0;

    const insights: string[] = [];

    if (participants.size > 5) {
      insights.push("Proyecto colaborativo.");
    }

    if (assignments > 0) {
      insights.push(`Se realizaron ${assignments} asignaciones.`);
    }

    if (publications > 0) {
      insights.push(`Se detectaron ${publications} publicaciones.`);
    }

    return {
      participants: participants.size,
      assignments,
      deliveries,
      publications,
      comments,
      firstActivity,
      lastActivity,
      durationDays,
      insights,
    };
  }

}