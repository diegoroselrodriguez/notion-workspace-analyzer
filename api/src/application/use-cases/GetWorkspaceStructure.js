import { NotionGateway } from "../../infrastructure/notion/notion.gateway.js";
export class GetWorkspaceStructure {
    notion;
    constructor(notion = new NotionGateway()) {
        this.notion = notion;
    }
    async execute() {
        const workspace = await this.notion.getWorkspace();
        const pages = await this.notion.getRootPages();
        return {
            workspace,
            pages,
        };
    }
}
//# sourceMappingURL=GetWorkspaceStructure.js.map