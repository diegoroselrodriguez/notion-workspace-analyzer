import { NotionGateway } from "../../infrastructure/notion/notion.gateway.js";
import { WorkspaceAnalyzer } from "./WorkspaceAnalyzer.js";

export class GetWorkspaceUseCase {

  async execute() {

    console.log("1");

    const gateway = new NotionGateway();

    console.log("2");

    const result = await gateway.queryDataSource(
      "4f68b74a-6e4f-495e-8f33-864a3feb3796"
    );

    console.log("3", result.results.length);

    const workspace =
      new WorkspaceAnalyzer().analyze(result.results);

    console.log("4");

    return workspace;

  }

}