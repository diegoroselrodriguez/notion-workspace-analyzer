export class InactiveDaysResolver {
    resolve(task) {
        const lastEvent = task.events.at(-1);
        if (!lastEvent) {
            return null;
        }
        const lastActivity = new Date(lastEvent.createdAt);
        const now = new Date();
        const diffMs = now.getTime() - lastActivity.getTime();
        return Math.floor(diffMs / (1000 * 60 * 60 * 24));
    }
}
//# sourceMappingURL=InactiveDaysResolver.js.map