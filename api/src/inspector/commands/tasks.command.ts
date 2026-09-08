import { NotionGateway } from "../../infrastructure/notion/notion.gateway.js";

const gateway = new NotionGateway();

const result = await gateway.queryDataSource(
  "4f68b74a-6e4f-495e-8f33-864a3feb3796"
);

console.dir(result, {
  depth: null,
  colors: true,
});