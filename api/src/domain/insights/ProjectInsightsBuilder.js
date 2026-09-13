export class ProjectInsightsBuilder {
    build(timeline) {
        const insights = [];
        const totalEvents = timeline.events.length;
        const participants = new Map();
        for (const event of timeline.events) {
            participants.set(event.author, (participants.get(event.author) ?? 0) + 1);
        }
        insights.push({
            type: "success",
            title: "Proyecto reconstruido",
            description: `InsightFlow reconstruyó automáticamente ${totalEvents} eventos del proyecto.`
        });
        insights.push({
            type: "info",
            title: "Participantes detectados",
            description: `Se identificaron ${participants.size} participantes distintos.`
        });
        const sortedParticipants = [...participants.entries()]
            .sort((a, b) => b[1] - a[1]);
        const leader = sortedParticipants[0];
        if (leader && totalEvents > 0) {
            const percent = Math.round((leader[1] / totalEvents) * 100);
            insights.push({
                type: "info",
                title: "Mayor participación",
                description: `${leader[0]} concentró el ${percent}% de la actividad del proyecto.`
            });
            if (percent >= 40) {
                insights.push({
                    type: "warning",
                    title: "Concentración de actividad",
                    description: "Una sola persona realizó gran parte de la actividad del proyecto."
                });
            }
        }
        return insights;
    }
}
//# sourceMappingURL=ProjectInsightsBuilder.js.map