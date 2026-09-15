import { NotionGateway } from "../../infrastructure/notion/notion.gateway.js";
import { getNotionDesignDataSourceId } from "../../config/notion.config.js";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

const gateway = new NotionGateway();

const result = await gateway.queryDataSource(
  getNotionDesignDataSourceId()
);

const task = result.results[2] as PageObjectResponse;

if (!task || task.object !== "page") {
  throw new Error("No se encontró la tarea.");
}

console.log("\n===== TAREA =====");

const titleProperty = task.properties["Nombre"] as {
  title: { plain_text: string }[];
};

console.log(
  titleProperty.title[0]?.plain_text ?? "Sin nombre"
);

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