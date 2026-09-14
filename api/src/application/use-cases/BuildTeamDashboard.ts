import { CommentContextFactory } from "../comments/CommentContextFactory.js";
import { WorkloadCalculator } from "../dashboard/WorkloadCalculator.js";
import { CommentEventParser } from "../parsers/comment-event.parser.js";
import { TimelineBuilder } from "../../domain/timeline/TimelineBuilder.js";
import { NotionGateway } from "../../infrastructure/notion/notion.gateway.js";

export class BuildTeamDashboard {

  async execute() {

    const gateway = new NotionGateway();

    const result = await gateway.queryDataSource(
      "4f68b74a-6e4f-495e-8f33-864a3feb3796"
    );

    const parser = new CommentEventParser();
    const contextFactory = new CommentContextFactory();

    const timelines = [];

    for (const page of result.results) {

      if (!("properties" in page)) {
        continue;
      }

      const taskName =
        (page.properties.Nombre as any)?.title?.[0]?.plain_text ??
        "Sin nombre";

      const comments = await gateway.getComments(page.id);

      const events = comments.results.map(comment => {

        const context = contextFactory.create(comment);

        return parser.parse(context);

      });

      const timeline = new TimelineBuilder().build(
        page.id,
        taskName,
        events as any
      );

      timelines.push(timeline);

    }

    return new WorkloadCalculator().calculate(
      timelines
    );

  }

}