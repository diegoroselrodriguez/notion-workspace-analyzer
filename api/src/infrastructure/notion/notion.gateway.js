import { getNotionClient } from "./notion.client.js";
export class NotionGateway {
    async getWorkspace() {
        const notion = getNotionClient();
        const me = await notion.users.me({});
        if (me.type !== "bot") {
            throw new Error("The provided token is not a bot token.");
        }
        if (!("workspace_id" in me.bot)) {
            throw new Error("Workspace information is not available.");
        }
        return {
            workspaceId: me.bot.workspace_id,
            workspaceName: me.bot.workspace_name ?? "Unknown workspace",
            botId: me.id,
            botName: me.name ?? "Unknown Bot",
        };
    }
    async getRootPages() {
        const notion = getNotionClient();
        const response = await notion.search({
            filter: {
                property: "object",
                value: "page",
            },
            page_size: 100,
        });
        return response.results;
    }
    async getComments(blockId) {
        const notion = getNotionClient();
        return await notion.comments.list({
            block_id: blockId,
            page_size: 100,
        });
    }
    async getDatabase(databaseId) {
        const notion = getNotionClient();
        return await notion.databases.retrieve({
            database_id: databaseId,
        });
    }
    async getBlocks(blockId) {
        const notion = getNotionClient();
        return await notion.blocks.children.list({
            block_id: blockId,
            page_size: 100,
        });
    }
    async getDataSource(dataSourceId) {
        const notion = getNotionClient();
        return await notion.dataSources.retrieve({
            data_source_id: dataSourceId,
        });
    }
    async queryDataSource(dataSourceId, options) {
        const notion = getNotionClient();
        return await notion.dataSources.query({
            data_source_id: dataSourceId,
            ...options,
        });
    }
    async getBlockChildren(blockId) {
        const notion = getNotionClient();
        return await notion.blocks.children.list({
            block_id: blockId,
            page_size: 100,
        });
    }
    async getPage(pageId) {
        const notion = getNotionClient();
        return await notion.pages.retrieve({
            page_id: pageId,
        });
    }
}
//# sourceMappingURL=notion.gateway.js.map