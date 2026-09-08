import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

let client: Client | null = null;

export function getNotionClient(): Client {

  if (client) {
    return client;
  }

  const token = process.env.NOTION_TOKEN;

  if (!token) {
    throw new Error("NOTION_TOKEN is not configured.");
  }

  client = new Client({
    auth: token.trim(),
  });

  return client;

}