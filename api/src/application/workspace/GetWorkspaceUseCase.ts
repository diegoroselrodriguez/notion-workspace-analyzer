import { NotionGateway } from "../../infrastructure/notion/notion.gateway.js";
import { WorkspaceAnalyzer } from "./WorkspaceAnalyzer.js";
import { getNotionDesignDataSourceId } from "../../config/notion.config.js";

export class GetWorkspaceUseCase {

  async execute() {

    const gateway =
      new NotionGateway();

    const result =
      await gateway.queryDataSource(
        getNotionDesignDataSourceId()
      );

    return new WorkspaceAnalyzer().analyze(
      result.results
    );

  }

}