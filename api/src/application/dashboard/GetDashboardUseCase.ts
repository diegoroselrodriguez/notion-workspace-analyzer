import { CommentContextFactory } from "../comments/CommentContextFactory.js";
import { CommentEventParser } from "../parsers/comment-event.parser.js";
import { TimelineBuilder } from "../../domain/timeline/TimelineBuilder.js";
import { NotionGateway } from "../../infrastructure/notion/notion.gateway.js";
import { getNotionPageTitle } from "../../infrastructure/notion/notion-page-title.js";
import { DashboardPresenter } from "../../presentation/dashboard/DashboardPresenter.js";
import { DashboardCache } from "../../infrastructure/cache/DashboardCache.js";

const cache = new DashboardCache<any>();

export class GetDashboardUseCase {

  async execute(projectId: string) {

    const cacheKey = projectId;

    if (cache.has(cacheKey)) {

      console.log(`⚡ Dashboard ${projectId} desde caché`);

      return cache.get(cacheKey)!;

    }

    console.log(`🌐 Dashboard ${projectId} desde Notion`);

    const gateway = new NotionGateway();

    const task = await gateway.getPage(projectId);

    if (!("properties" in task)) {
      throw new Error("Proyecto no encontrado.");
    }

    const taskName =
      getNotionPageTitle(task);

    const comments =
      await gateway.getComments(task.id);

    const contextFactory =
      new CommentContextFactory();

    const parser =
      new CommentEventParser();

    const events =
      comments.results.map(comment => {

        const context =
          contextFactory.create(comment);

        return parser.parse(context);

      });

    const timeline =
      new TimelineBuilder().build(
        task.id,
        taskName,
        events
      );

    const dashboard =
      new DashboardPresenter().present(timeline);

    cache.set(cacheKey, dashboard);

    return dashboard;

  }

}