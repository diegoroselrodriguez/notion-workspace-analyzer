import { ProjectAnalyzer } from "../../domain/analysis/ProjectAnalyzer.js";
import type { Timeline } from "../../domain/timeline/Timeline.js";

export class ProjectSummaryPrinter {

  static print(timeline: Timeline): void {

    const summary = new ProjectAnalyzer().analyze(timeline);

    console.log("");
    console.log("==================================================");
    console.log("RESUMEN DEL PROYECTO");
    console.log("==================================================");
    console.log("");

    console.log(`👥 Participantes : ${summary.participants}`);
    console.log(`💬 Comentarios  : ${summary.comments}`);
    console.log(`📌 Asignaciones : ${summary.assignments}`);
    console.log(`📦 Entregas     : ${summary.deliveries}`);
    console.log(`🚀 Publicaciones: ${summary.publications}`);
    console.log(`📅 Duración     : ${summary.durationDays} días`);

    console.log("");
    console.log("INSIGHTS");
    console.log("");

    for (const insight of summary.insights) {
      console.log(`✓ ${insight}`);
    }

    console.log("");
  }

}