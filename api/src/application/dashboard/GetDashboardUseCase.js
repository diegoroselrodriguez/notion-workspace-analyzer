import { CommentContextFactory } from "../comments/CommentContextFactory.js";
import { CommentEventParser } from "../parsers/comment-event.parser.js";
import { TimelineBuilder } from "../../domain/timeline/TimelineBuilder.js";
import { NotionGateway } from "../../infrastructure/notion/notion.gateway.js";
import { DashboardPresenter } from "../../presentation/dashboard/DashboardPresenter.js";
import { DashboardCache } from "../../infrastructure/cache/DashboardCache.js";
const cache = new DashboardCache();
export class GetDashboardUseCase {
    async execute(projectIndex = 2) {
        const cacheKey = String(projectIndex);
        if (cache.has(cacheKey)) {
            console.log(`⚡ Dashboard ${projectIndex} desde caché`);
            return cache.get(cacheKey);
        }
        console.log(`🌐 Dashboard ${projectIndex} desde Notion`);
        const gateway = new NotionGateway();
        const result = await gateway.queryDataSource("4f68b74a-6e4f-495e-8f33-864a3feb3796");
        const task = result.results[projectIndex];
        if (!task || !("properties" in task)) {
            throw new Error("Proyecto no encontrado.");
        }
        const taskName = task.properties.Nombre?.title?.[0]?.plain_text ??
            "Sin nombre";
        const comments = await gateway.getComments(task.id);
        const contextFactory = new CommentContextFactory();
        const parser = new CommentEventParser();
        const events = comments.results.map(comment => {
            const context = contextFactory.create(comment);
            return parser.parse(context);
        });
        const timeline = new TimelineBuilder().build(task.id, taskName, events);
        const dashboard = new DashboardPresenter().present(timeline);
        cache.set(cacheKey, dashboard);
        return dashboard;
    }
}
//# sourceMappingURL=GetDashboardUseCase.js.map