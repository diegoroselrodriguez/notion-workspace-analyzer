import type { Timeline } from "../../domain/timeline/Timeline.js";
import type { DashboardDto } from "./DashboardDto.js";

export class DashboardPresenter {

  present(timeline: Timeline): DashboardDto {

    const participants = [...new Set(
      timeline.events.map(event => event.author)
    )];

    const activity = participants
      .map(name => ({
        name,
        events: timeline.events.filter(
          event => event.author === name
        ).length
      }))
      .sort((a, b) => b.events - a.events);

    return {

      title: timeline.taskName,

      status: "Finalizado",

      summary: `InsightFlow reconstruyó automáticamente este proyecto analizando ${timeline.events.length} eventos registrados en Notion.`,

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
          value: timeline.events.filter(
            event => event.type === "ASSIGNMENT"
          ).length
        },

        {
          label: "Entregas",
          value: timeline.events.filter(
            event => event.type === "DELIVERY"
          ).length
        },

        {
          label: "Publicaciones",
          value: timeline.events.filter(
            event => event.type === "PUBLICATION"
          ).length
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