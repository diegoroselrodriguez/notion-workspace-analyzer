import { NotionGateway } from "./src/infrastructure/notion/notion.gateway.js";
import { CommentEventParser } from "./src/application/parsers/comment-event.parser.js";
import { CommentContextFactory } from "./src/application/comments/CommentContextFactory.js";

const factory = new CommentContextFactory();
const gateway = new NotionGateway();
const parser = new CommentEventParser();

const result = await gateway.queryDataSource(
  "4f68b74a-6e4f-495e-8f33-864a3feb3796"
);

const task = result.results[2];

if (!task || !("properties" in task)) {
  throw new Error("No se encontró la tarea");
}

const taskName = (task.properties["Nombre"] as any)?.title?.[0]?.plain_text ?? "Sin nombre";

console.log("Tarea:", taskName);

const comments = await gateway.getComments(task.id);

console.log("\n===== EVENTOS =====\n");

for (const comment of comments.results) {

  const context = factory.create(comment);

  const event = parser.parse(context);

  console.dir(event, {
    depth: null,
  });

}