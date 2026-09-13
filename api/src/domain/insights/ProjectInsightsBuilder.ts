export class ProjectInsightsBuilder {

  build(timeline: any) {

    const deliveries =
      timeline.events.filter(
        (e: any) => e.type === "DELIVERY"
      ).length;

    const publications =
      timeline.events.filter(
        (e: any) => e.type === "PUBLICATION"
      ).length;

    return [

      `Se detectaron ${timeline.events.length} eventos durante el proyecto.`,

      `Participaron ${timeline.participants.length} personas.`,

      `Hubo ${deliveries} entregas relevantes.`,

      `Se realizaron ${publications} publicaciones.`,

      "No se detectan bloqueos importantes.",

      "La actividad fue consistente durante el desarrollo."

    ];

  }

}