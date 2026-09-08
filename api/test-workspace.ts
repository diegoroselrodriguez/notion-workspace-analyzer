import dotenv from "dotenv";
import { NotionGateway } from "./src/infrastructure/notion/notion.gateway.js";

dotenv.config();

async function main() {

  const gateway = new NotionGateway();

  const workspace = await gateway.getWorkspace();

  console.log(workspace);

}

main();