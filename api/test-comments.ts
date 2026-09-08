import { NotionGateway } from "./src/infrastructure/notion/notion.gateway.js";

const gateway = new NotionGateway();

const pages = await gateway.getRootPages();

if (pages.length === 0) {
  throw new Error("No hay páginas.");
}

const page = pages[0]!;

console.log("Página:", page.id);

const comments = await gateway.getComments(page.id);

console.dir(comments, {
  depth: null,
});