import { NotionGateway } from "../../infrastructure/notion/notion.gateway.js";

const DESIGN_DATA_SOURCE_ID =
  "4f68b74a-6e4f-495e-8f33-864a3feb3796";

const gateway = new NotionGateway();

let cursor: string | undefined = undefined;
let total = 0;
let pageNumber = 1;

do {

  const result = await gateway.queryDataSource(
    DESIGN_DATA_SOURCE_ID,
    {
      page_size: 100,
      ...(cursor
        ? { start_cursor: cursor }
        : {}),
    }
  );

  console.error(
    `Página ${pageNumber}: ${result.results.length} resultados | has_more: ${result.has_more} | next_cursor: ${result.next_cursor ?? "null"}`
  );

  for (const page of result.results) {

    if (!("properties" in page)) {
      continue;
    }

    const name =
      (page.properties.Nombre as any)
        ?.title?.[0]?.plain_text ??
      "Sin nombre";

    console.log(`Proyecto: ${name}`);
    console.log(`ID:       ${page.id}`);
    console.log(
      "────────────────────────────────────────────────────────────"
    );

    total++;

  }

  if (result.has_more && result.next_cursor) {

    cursor = result.next_cursor;
    pageNumber++;

  } else {

    cursor = undefined;

  }

} while (cursor);

console.log("");
console.log(`Total: ${total} proyectos`);
console.log("");
