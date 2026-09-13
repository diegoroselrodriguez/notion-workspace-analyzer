import { NotionGateway } from "./notion.gateway.js";
export declare class WorkspaceScanner {
    private readonly notionGateway;
    constructor(notionGateway?: NotionGateway);
    scan(): Promise<{
        workspace: import("../../contracts/workspace.js").Workspace;
        pages: (import("@notionhq/client").DataSourceObjectResponse | import("@notionhq/client").PageObjectResponse | import("@notionhq/client").PartialDataSourceObjectResponse | import("@notionhq/client").PartialPageObjectResponse)[];
        databases: never[];
        blocks: never[];
        users: never[];
        relations: never[];
        statistics: {};
    }>;
}
//# sourceMappingURL=workspace.scanner.d.ts.map