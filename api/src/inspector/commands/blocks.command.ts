import { NotionGateway } from "../../infrastructure/notion/notion.gateway.js";
import type {
  BlockObjectResponse,
  GetDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

function isFullBlock(
  block: unknown,
): block is BlockObjectResponse {

  return (
    typeof block === "object" &&
    block !== null &&
    "type" in block
  );

}

function isFullDatabase(
  database: GetDatabaseResponse,
): database is Extract<GetDatabaseResponse, { title: unknown }> {

  return "title" in database;

}

const gateway = new NotionGateway();

const pages = await gateway.getRootPages();

if (pages.length === 0) {
  throw new Error("No se encontraron páginas.");
}

const page = pages[0]!;

console.log("\n=== PÁGINA ===");
console.log(page.id);

const blocks = await gateway.getBlocks(page.id);

console.log("\n=== BLOQUES ===");

for (const block of blocks.results) {

  if (!isFullBlock(block)) {
    continue;
  }

  console.log("--------------------");
  console.log("ID:", block.id);
  console.log("Tipo:", block.type);
  console.log("Tiene hijos:", block.has_children);

  if (block.type === "child_database") {

    const database = await gateway.getDatabase(block.id);

    console.log("\nDATABASE:");
    if (isFullDatabase(database)) {

      console.log(
        database.title.map(t => t.plain_text).join("") || "Sin nombre"
      );

    }

    if ("data_sources" in database) {

      for (const source of database.data_sources) {

        console.log("\n===== DATA SOURCE =====");
        console.log("Nombre:", source.name);
        console.log("ID:", source.id);

        const ds = await gateway.getDataSource(source.id);

        console.dir(ds, {
          depth: null,
          colors: true,
        });
      }
    }

  }

}