import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

import { NotionGateway } from "../../infrastructure/notion/notion.gateway.js";
import { getNotionDesignDataSourceId } from "../../config/notion.config.js";
import { getNotionPageTitle } from "../../infrastructure/notion/notion-page-title.js";

export type ProjectListItem = {
  id: string;
  name: string;
  lastEditedTime: string;
};

export class GetProjectsUseCase {

  async execute(): Promise<ProjectListItem[]> {

    const gateway =
      new NotionGateway();

    const projects: ProjectListItem[] = [];

    let cursor: string | undefined;

    do {

      const result =
        await gateway.queryDataSource(
          getNotionDesignDataSourceId(),
          {
            page_size: 100,

            ...(cursor
              ? { start_cursor: cursor }
              : {}),

            sorts: [
              {
                timestamp: "last_edited_time",
                direction: "descending",
              },
            ],
          },
        );

      for (const item of result.results) {

        if (item.object !== "page") {
          continue;
        }

        const page =
          item as PageObjectResponse;

        projects.push({
          id: page.id,
          name: getNotionPageTitle(page),
          lastEditedTime: page.last_edited_time,
        });

      }

      cursor =
        result.has_more && result.next_cursor
          ? result.next_cursor
          : undefined;

    } while (cursor);

    return projects;

  }

}