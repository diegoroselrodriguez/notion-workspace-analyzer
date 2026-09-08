import { NotionGateway } from "../../infrastructure/notion/notion.gateway.js";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

const gateway = new NotionGateway();

const result = await gateway.queryDataSource(
  "4f68b74a-6e4f-495e-8f33-864a3feb3796"
);

const task = result.results[2] as PageObjectResponse;

if (!task || task.object !== "page") {
  throw new Error("No se encontró la tarea.");
}

console.log("\n===== TAREA =====");
console.log(task.properties.Nombre.title[0]?.plain_text);

const blocks = await gateway.getBlockChildren(task.id);

console.dir(blocks, {
  depth: null,
  colors: true,
});

const comments = await gateway.getComments(task.id);

console.log("\n===== COMMENTS =====");

console.dir(comments, {
  depth: null,
  colors: true,
});