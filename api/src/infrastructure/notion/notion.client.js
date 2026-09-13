import { Client } from "@notionhq/client";
import dotenv from "dotenv";
dotenv.config();
let client = null;
export function getNotionClient() {
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
//# sourceMappingURL=notion.client.js.map