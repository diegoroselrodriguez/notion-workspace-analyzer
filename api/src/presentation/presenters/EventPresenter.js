export class EventPresenter {
    static present(event) {
        switch (event.type) {
            case "ASSIGNMENT":
                return {
                    icon: "👤",
                    title: "Asignación",
                    author: event.author,
                    date: event.createdAt,
                    description: event.target
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
            case "PUBLICATION":
                return {
                    icon: "🚀",
                    title: "Publicación",
                    author: event.author,
                    date: event.createdAt,
                    description: "Contenido publicado correctamente.",
                };
            case "REVIEW":
                return {
                    icon: "🧐",
                    title: "Revisión",
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
//# sourceMappingURL=EventPresenter.js.map