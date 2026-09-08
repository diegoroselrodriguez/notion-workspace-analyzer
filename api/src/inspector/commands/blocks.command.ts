import { NotionGateway } from "../../infrastructure/notion/notion.gateway.js";

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

  console.log("--------------------");
  console.log("ID:", block.id);
  console.log("Tipo:", block.type);
  console.log("Tiene hijos:", block.has_children);

  if (block.type === "child_database") {

    const database = await gateway.getDatabase(block.id);

    console.log("\nDATABASE:");
    console.log(
      database.title?.map((t: any) => t.plain_text).join("") ?? "Sin nombre"
    );

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