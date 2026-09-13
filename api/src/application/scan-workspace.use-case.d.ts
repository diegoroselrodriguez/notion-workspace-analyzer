import { WorkspaceScanner } from "../infrastructure/notion/workspace.scanner.js";
export declare class ScanWorkspaceUseCase {
    private readonly scanner;
    constructor(scanner?: WorkspaceScanner);
    execute(): Promise<{
        workspace: import("../contracts/workspace.js").Workspace;
        pages: (import("@notionhq/client").DataSourceObjectResponse | import("@notionhq/client").PageObjectResponse | import("@notionhq/client").PartialDataSourceObjectResponse | import("@notionhq/client").PartialPageObjectResponse)[];
        databases: never[];
        blocks: never[];
        users: never[];
        relations: never[];
        statistics: {};
    }>;
}
//# sourceMappingURL=scan-workspace.use-case.d.ts.map