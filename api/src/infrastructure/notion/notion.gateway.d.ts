import type { Workspace } from "../../contracts/workspace.js";
import type { QueryDataSourceParameters } from "@notionhq/client/build/src/api-endpoints.js";
export declare class NotionGateway {
    getWorkspace(): Promise<Workspace>;
    getRootPages(): Promise<(import("@notionhq/client/build/src/api-endpoints.js").DataSourceObjectResponse | import("@notionhq/client/build/src/api-endpoints.js").PageObjectResponse | import("@notionhq/client/build/src/api-endpoints.js").PartialDataSourceObjectResponse | import("@notionhq/client/build/src/api-endpoints.js").PartialPageObjectResponse)[]>;
    getComments(blockId: string): Promise<import("@notionhq/client/build/src/api-endpoints.js").ListCommentsResponse>;
    getDatabase(databaseId: string): Promise<import("@notionhq/client/build/src/api-endpoints.js").GetDatabaseResponse>;
    getBlocks(blockId: string): Promise<import("@notionhq/client/build/src/api-endpoints.js").ListBlockChildrenResponse>;
    getDataSource(dataSourceId: string): Promise<import("@notionhq/client/build/src/api-endpoints.js").GetDataSourceResponse>;
    queryDataSource(dataSourceId: string, options?: Pick<QueryDataSourceParameters, "page_size" | "sorts">): Promise<import("@notionhq/client/build/src/api-endpoints.js").QueryDataSourceResponse>;
    getBlockChildren(blockId: string): Promise<import("@notionhq/client/build/src/api-endpoints.js").ListBlockChildrenResponse>;
    getPage(pageId: string): Promise<import("@notionhq/client/build/src/api-endpoints.js").GetPageResponse>;
}
//# sourceMappingURL=notion.gateway.d.ts.map