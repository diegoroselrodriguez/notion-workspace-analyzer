import { NotionGateway } from "../../infrastructure/notion/notion.gateway.js";

const DESIGN_DATA_SOURCE_ID =
  "4f68b74a-6e4f-495e-8f33-864a3feb3796";

const gateway = new NotionGateway();

const result = await gateway.queryDataSource(
  DESIGN_DATA_SOURCE_ID,
  {
    page_size: 100,
    sorts: [
      {
        timestamp: "last_edited_time",
        direction: "descending",
      },
    ],
  }
);

console.log("");
console.log("════════════════════════════════════════════════════════════");
console.log("PROYECTOS DE DISEÑO");
console.log("════════════════════════════════════════════════════════════");
console.log("");

for (const page of result.results) {
  if (!("properties" in page)) {
    continue;
  }

  const name =
    (page.properties.Nombre as any)?.title?.[0]?.plain_text ??
    "Sin nombre";

  console.log(`Proyecto: ${name}`);
  console.log(`ID:       ${page.id}`);
  console.log("────────────────────────────────────────────────────────────");
}

console.log("");
console.log(`Total: ${result.results.length} proyectos`);
console.log("");
