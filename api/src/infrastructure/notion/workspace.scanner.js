import { NotionGateway } from "./notion.gateway.js";
export class WorkspaceScanner {
    notionGateway;
    constructor(notionGateway = new NotionGateway()) {
        this.notionGateway = notionGateway;
    }
    async scan() {
        const workspace = await this.notionGateway.getWorkspace();
        const pages = await this.notionGateway.getRootPages();
        return {
            workspace,
            pages,
            databases: [],
            blocks: [],
            users: [],
            relations: [],
            statistics: {},
        };
    }
}
//# sourceMappingURL=workspace.scanner.js.map