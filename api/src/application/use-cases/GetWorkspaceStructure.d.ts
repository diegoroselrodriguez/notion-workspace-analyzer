import { NotionGateway } from "../../infrastructure/notion/notion.gateway.js";
export declare class GetWorkspaceStructure {
    private readonly notion;
    constructor(notion?: NotionGateway);
    execute(): Promise<{
        workspace: import("../../contracts/workspace.js").Workspace;
        pages: (import("@notionhq/client").DataSourceObjectResponse | import("@notionhq/client").PageObjectResponse | import("@notionhq/client").PartialDataSourceObjectResponse | import("@notionhq/client").PartialPageObjectResponse)[];
    }>;
}
//# sourceMappingURL=GetWorkspaceStructure.d.ts.map