import { NotionGateway } from "../../infrastructure/notion/notion.gateway.js";
import { CommentEventParser } from "../../application/parsers/comment-event.parser.js";
import { TimelineBuilder } from "../../domain/timeline/TimelineBuilder.js";
import { CommentContextFactory } from "../../application/comments/CommentContextFactory.js";

const gateway = new NotionGateway();

// Data Source de Diseño
const result = await gateway.queryDataSource(
  "4f68b74a-6e4f-495e-8f33-864a3feb3796"
);

// Elegimos una tarea de ejemplo
const task = result.results[2] as any;

console.log("\n===== TAREA =====");
console.log(task.properties.Nombre.title[0]?.plain_text);

// Obtener comentarios
const comments = await gateway.getComments(task.id);

// Convertir comentarios en eventos
const parser = new CommentEventParser();
const contextFactory = new CommentContextFactory();

const events = comments.results.map(comment => {

  const context = contextFactory.create(comment);

  return parser.parse(context);

});

// Construir timeline
const builder = new TimelineBuilder();

const timeline = builder.build(
  task.id,
  task.properties.Nombre.title[0]?.plain_text ?? "",
  events
);

console.dir(timeline, {
  depth: null,
});