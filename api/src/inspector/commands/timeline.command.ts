import { NotionGateway } from "../../infrastructure/notion/notion.gateway.js";

import { CommentContextFactory } from "../../application/comments/CommentContextFactory.js";
import { CommentEventParser } from "../../application/parsers/comment-event.parser.js";

import { TimelineBuilder } from "../../domain/timeline/TimelineBuilder.js";
import { TimelinePrinter } from "../../presentation/TimelinePrinter.js";
import { TimelineHtmlRenderer } from "../../presentation/html/TimelineHtmlRenderer.js";

export async function timelineCommand() {

  const gateway = new NotionGateway();

  const result = await gateway.queryDataSource(
    "4f68b74a-6e4f-495e-8f33-864a3feb3796"
  );

  const task = result.results[2];

  if (!task || !("properties" in task)) {
    throw new Error("No se encontró la tarea.");
  }

  const taskName =
    (task.properties.Nombre as any)?.title?.[0]?.plain_text ??
    "Sin nombre";

  const comments = await gateway.getComments(task.id);

  const contextFactory = new CommentContextFactory();
  const parser = new CommentEventParser();

  const events = comments.results.map(comment => {

    const context = contextFactory.create(comment);

    return parser.parse(context);

  });

  const timeline = new TimelineBuilder().build(
    task.id,
    taskName,
    events as any
  );

  TimelinePrinter.print(timeline);

  TimelineHtmlRenderer.render(timeline);

}