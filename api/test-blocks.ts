import { NotionGateway } from "./src/infrastructure/notion/notion.gateway.js";

const gateway = new NotionGateway();

const pages = await gateway.getRootPages();

if (pages.length === 0) {
  throw new Error("No hay páginas.");
}

const page = pages[0]!;

console.log("\n=== PÁGINA ===");
console.log(page.id);

const response = await gateway.getBlockChildren(page.id);

const blocks = response.results as any[];

console.log("\n=== BLOQUES ===");

for (const block of blocks) {
  console.log("--------------------");
  console.log("ID:", block.id);
  console.log("Tipo:", block.type);

  if ("has_children" in block) {
    console.log("Tiene hijos:", block.has_children);
  }
}