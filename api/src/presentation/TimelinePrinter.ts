import { Timeline } from "../domain/timeline/Timeline.js";

export class TimelinePrinter {

  static print(timeline: Timeline) {

    console.clear();

    console.log("");
    console.log("══════════════════════════════════════════════════════════════════════");
    console.log("");
    console.log("                 🚀 InsightFlow");
    console.log("         Timeline inteligente de proyectos");
    console.log("");
    console.log("══════════════════════════════════════════════════════════════════════");

    console.log("");
    console.log("📋 PROYECTO");
    console.log("──────────────────────────────────────────────────────────────────────");
    console.log("");

    console.log(timeline.taskName);

    console.log("");
    console.log("👥 PARTICIPANTES");
    console.log("──────────────────────────────────────────────────────────────────────");
    console.log("");

    const participants = [...new Set(
      timeline.events.map(e => e.author)
    )];

    for (const participant of participants) {
      console.log("👤", participant);
    }

    console.log("");
    console.log("📊 RESUMEN");
    console.log("──────────────────────────────────────────────────────────────────────");
    console.log("");

    console.log(
      "Eventos detectados:",
      timeline.events.length
    );

    console.log(
      "Comentarios:",
      timeline.events.filter(e => e.type === "COMMENT").length
    );

    console.log(
      "Asignaciones:",
      timeline.events.filter(e => e.type === "ASSIGNMENT").length
    );

    console.log("");

    console.log("🕒 HISTORIA DEL PROYECTO");
    console.log("──────────────────────────────────────────────────────────────────────");
    console.log("");

    for (const event of timeline.events) {

      const date = new Date(event.createdAt);

      const icon = this.icon(event.type);

      console.log(
        `${icon} ${date.toLocaleDateString("es-ES")} ${date.toLocaleTimeString("es-ES",{
          hour:"2-digit",
          minute:"2-digit"
        })}`
      );

      console.log(event.author);

      if (event.target) {
        console.log("→", event.target);
      }

      console.log(event.text);

      console.log("");
      console.log("──────────────────────────────────────────────────────────────────────");
      console.log("");

    }

    console.log("✓ Fin del proyecto");
    console.log("");

  }

  private static icon(type:string){

    switch(type){

      case "ASSIGNMENT":
        return "👤";

      case "DELIVERY":
        return "📦";

      case "PUBLICATION_COMPLETED":
      case "PUBLICATION":
        return "🚀";

      case "REVIEW_REQUEST":
        return "🧐";

      case "REVIEW_COMPLETED":
        return "✅";

      default:
        return "💬";

    }

  }

}