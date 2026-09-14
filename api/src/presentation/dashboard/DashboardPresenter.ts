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
          value: 4
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

}