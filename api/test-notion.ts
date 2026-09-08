import dotenv from "dotenv";
import { getNotionClient } from "./src/infrastructure/notion/notion.client.js";

dotenv.config();

async function main() {

  const notion = getNotionClient();

  const me = await notion.users.me({});

  console.log(me);

}

main();