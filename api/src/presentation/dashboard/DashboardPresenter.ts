import type { Timeline } from "../../domain/timeline/Timeline.js";
import type { DashboardDto } from "./DashboardDto.js";

export class DashboardPresenter {

  present(timeline: Timeline): DashboardDto {

    const participants = [
      ...new Set(
        timeline.events.map(event => event.author)
      )
    ];

    const deliveries =
      timeline.events.filter(
        event => event.type === "DELIVERY"
      ).length;

    const publicationRequests =
      timeline.events.filter(
        event => event.type === "PUBLICATION_REQUEST"
      ).length;

    const publications =
      timeline.events.filter(
        event => event.type === "PUBLICATION_COMPLETED"
      ).length;

    const assignments =
      timeline.events.filter(
        event => event.type === "ASSIGNMENT"
      ).length;

    const activity = participants
      .map(name => ({
        name,
        events: timeline.events.filter(
          event => event.author === name
        ).length
      }))
      .sort((a, b) => b.events - a.events);

    const duration = this.calculateDurationDays(timeline);

    const publicationRequestInsight =
      publicationRequests === 1
        ? "Se detectó 1 solicitud de publicación."
        : `Se detectaron ${publicationRequests} solicitudes de publicación.`;

    const publicationInsight =
      publications === 1
        ? "Se completó 1 publicación."
        : `Se completaron ${publications} publicaciones.`;

    return {

      title: timeline.taskName,

      status: "Finalizado",

      summary:
        `InsightFlow reconstruyó automáticamente este proyecto analizando ${timeline.events.length} eventos registrados en Notion.`,

      insights: [

        `Se detectaron ${timeline.events.length} eventos durante el proyecto.`,

        `Participaron ${participants.length} personas.`,

        `Hubo ${assignments} asignaciones de trabajo.`,

        `Se realizaron ${deliveries} entregas relevantes.`,

        publicationRequestInsight,

        publicationInsight

      ],

      kpis: [

        {
          label: "Eventos",
          value: timeline.events.length
        },

        {
          label: "Participantes",
          value: participants.length
        },

        {
          label: "Asignaciones",
          value: assignments
        },

        {
          label: "Entregas",
          value: deliveries
        },

        {
          label: "Publicaciones",
          value: publications
        },

        {
          label: "Días",
          value: duration
        }

      ],

      activity,

      timeline: timeline.events.map(event => ({

        type: event.type.toLowerCase(),

        author: event.author,

        date: new Date(event.createdAt).toLocaleString(
          "es-ES",
          {
            day: "2-digit",
            month: "short",
            hour: "2-digit",
            minute: "2-digit"
          }
        ),

        description: event.text

      }))

    };

  }

  private calculateDurationDays(
    timeline: Timeline
  ): number {

    if (timeline.events.length === 0) {
      return 0;
    }

    const firstEvent =
      timeline.events[0];

    const lastEvent =
      timeline.events[
        timeline.events.length - 1
      ];

    if (!firstEvent || !lastEvent) {
      return 0;
    }

    const start =
      new Date(firstEvent.createdAt);

    const end =
      new Date(lastEvent.createdAt);

    const diffMs =
      end.getTime() - start.getTime();

    const diffDays =
      diffMs / (1000 * 60 * 60 * 24);

    return Math.max(
      1,
      Math.ceil(diffDays)
    );

  }

}