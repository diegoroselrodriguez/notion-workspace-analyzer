import type { Timeline } from "../../domain/timeline/Timeline.js";

export interface UserActivity {
  name: string;
  events: number;
}

export interface PresentedProject {
  title: string;
  status: string;
  participants: number;
  events: number;
  assignments: number;
  deliveries: number;
  publications: number;
  duration: number;
  mostActiveUser: string;
  summary: string;
  activity: UserActivity[];
}

export class ProjectPresenter {

  static present(timeline: Timeline): PresentedProject {

    const participants = [
      ...new Set(
        timeline.events.map(event => event.author)
      ),
    ];

    const assignments =
      timeline.events.filter(e => e.type === "ASSIGNMENT").length;

    const deliveries =
      timeline.events.filter(e => e.type === "DELIVERY").length;

    const publications =
      timeline.events.filter(e => e.type === "PUBLICATION").length;

    if (timeline.events.length === 0) {

      return {
        title: timeline.taskName,
        status: "VACÍO",
        participants: 0,
        events: 0,
        assignments: 0,
        deliveries: 0,
        publications: 0,
        duration: 0,
        mostActiveUser: "-",
        summary: "No existe información suficiente.",
        activity: [],
      };

    }

    const firstDate = new Date(timeline.events[0]!.createdAt);
    const lastDate = new Date(timeline.events[timeline.events.length - 1]!.createdAt);

    const duration = Math.max(
      1,
      Math.ceil(
        (lastDate.getTime() - firstDate.getTime()) /
        (1000 * 60 * 60 * 24)
      )
    );

    const counter = new Map<string, number>();

    for (const event of timeline.events) {

      counter.set(
        event.author,
        (counter.get(event.author) ?? 0) + 1
      );

    }

    const activity = [...counter.entries()]
      .map(([name, events]) => ({
        name,
        events,
      }))
      .sort((a, b) => b.events - a.events);

    return {

      title: timeline.taskName,

      status: "FINALIZADO",

      participants: participants.length,

      events: timeline.events.length,

      assignments,

      deliveries,

      publications,

      duration,

      mostActiveUser: activity[0]?.name ?? "-",

      summary:
        `InsightFlow ha reconstruido automáticamente este proyecto. Participaron ${participants.length} personas durante ${duration} días. Se detectaron ${assignments} asignaciones, ${deliveries} entregas y ${publications} publicaciones.`,

      activity,

    };

  }

}