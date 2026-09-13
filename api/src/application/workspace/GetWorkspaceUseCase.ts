import { NotionGateway } from "../../infrastructure/notion/notion.gateway.js";
import { WorkspaceAnalyzer } from "./WorkspaceAnalyzer.js";

export class GetWorkspaceUseCase {

  async execute() {

    const gateway = new NotionGateway();

    const result = await gateway.queryDataSource(
      "4f68b74a-6e4f-495e-8f33-864a3feb3796"
    );

    console.log("========== PRIMER PROYECTO ==========");
    console.dir(result.results[0], { depth: null });
    console.log("=====================================");

    return new WorkspaceAnalyzer().analyze(result.results);

  }

}