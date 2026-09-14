import { CommentContextFactory } from "../comments/CommentContextFactory.js";
import { CommentEventParser } from "../parsers/comment-event.parser.js";
import { WorkflowStatusResolver } from "../analyzers/resolvers/WorkflowStatusResolver.js";

import { TimelineBuilder } from "../../domain/timeline/TimelineBuilder.js";
import { Task } from "../../domain/task/Task.js";

import { NotionGateway } from "../../infrastructure/notion/notion.gateway.js";
import { getNotionPageTitle } from "../../infrastructure/notion/notion-page-title.js";
import { DashboardCache } from "../../infrastructure/cache/DashboardCache.js";

import { DashboardPresenter } from "../../presentation/dashboard/DashboardPresenter.js";

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

    const taskPage = await gateway.getPage(projectId);

    if (!("properties" in taskPage)) {
      throw new Error("Proyecto no encontrado.");
    }

    const taskName =
      getNotionPageTitle(taskPage);

    const comments =
      await gateway.getComments(taskPage.id);

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
        taskPage.id,
        taskName,
        events
      );

    const task =
      new Task(
        taskPage.id,
        taskName,
        null,
        [],
        events
      );

    const status =
      new WorkflowStatusResolver().resolve(task);

    const dashboard =
      new DashboardPresenter().present(
        timeline,
        status
      );

    cache.set(cacheKey, dashboard);

    return dashboard;

  }

}