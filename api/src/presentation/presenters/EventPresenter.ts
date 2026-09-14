import type { TimelineEvent } from "../../domain/timeline/TimelineEvent.js";

export interface PresentedEvent {

  icon: string;

  title: string;

  author: string;

  date: string;

  description: string;

}

export class EventPresenter {

  static present(event: TimelineEvent): PresentedEvent {

    switch (event.type) {

      case "ASSIGNMENT":

        return {
          icon: "👤",
          title: "Asignación",
          author: event.author,
          date: event.createdAt,
          description:
            event.target
              ? `${event.author} asignó el trabajo a ${event.target}`
              : event.text,
        };

      case "DELIVERY":

        return {
          icon: "📦",
          title: "Entrega",
          author: event.author,
          date: event.createdAt,
          description: "Se ha entregado un trabajo.",
        };

      case "PUBLICATION_REQUEST":

        return {
          icon: "📤",
          title: "Solicitud de publicación",
          author: event.author,
          date: event.createdAt,
          description: event.text,
        };

      case "PUBLICATION_COMPLETED":

        return {
          icon: "🚀",
          title: "Publicación",
          author: event.author,
          date: event.createdAt,
          description: event.text,
        };

      case "REVIEW_REQUEST":

        return {
          icon: "🧐",
          title: "Solicitud de revisión",
          author: event.author,
          date: event.createdAt,
          description: event.text,
        };

      case "REVIEW_COMPLETED":

        return {
          icon: "✅",
          title: "Revisión completada",
          author: event.author,
          date: event.createdAt,
          description: event.text,
        };

      default:

        return {
          icon: "💬",
          title: "Comentario",
          author: event.author,
          date: event.createdAt,
          description: event.text,
        };

    }

  }

}