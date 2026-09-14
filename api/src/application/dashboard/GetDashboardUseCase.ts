import { CommentContextFactory } from "../comments/CommentContextFactory.js";
import { CommentEventParser } from "../parsers/comment-event.parser.js";

import { TaskAnalyzer } from "../analyzers/TaskAnalyzer.js";
import { CurrentAssigneeResolver } from "../analyzers/resolvers/CurrentAssigneeResolver.js";
import { WorkflowStatusResolver } from "../analyzers/resolvers/WorkflowStatusResolver.js";
import { LeadTimeResolver } from "../analyzers/resolvers/LeadTimeResolver.js";
import { InactiveDaysResolver } from "../analyzers/resolvers/InactiveDaysResolver.js";

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

      console.log(
        `⚡ Dashboard ${projectId} desde caché`
      );

      return cache.get(cacheKey)!;

    }

    console.log(
      `🌐 Dashboard ${projectId} desde Notion`
    );

    const gateway =
      new NotionGateway();

    const taskPage =
      await gateway.getPage(projectId);

    if (!("properties" in taskPage)) {
      throw new Error(
        "Proyecto no encontrado."
      );
    }

    const taskName =
      getNotionPageTitle(taskPage);

    const comments =
      await gateway.getComments(
        taskPage.id
      );

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

    const task =
      new Task(
        taskPage.id,
        taskName,
        null,
        [],
        events
      );

    const analyzer =
      new TaskAnalyzer(
        new CurrentAssigneeResolver(),
        new WorkflowStatusResolver(),
        new LeadTimeResolver(),
        new InactiveDaysResolver()
      );

    const snapshot =
      analyzer.analyze(task);

    const timeline =
      new TimelineBuilder().build(
        taskPage.id,
        taskName,
        events
      );

    const dashboard =
      new DashboardPresenter().present(
        timeline,
        snapshot.status,
        snapshot.attention
      );

    cache.set(
      cacheKey,
      dashboard
    );

    return dashboard;

  }

}