import { NotionGateway } from "../../infrastructure/notion/notion.gateway.js";

export class GetWorkspaceStructure {
  constructor(
    private readonly notion = new NotionGateway()
  ) {}

  async execute() {
    const workspace = await this.notion.getWorkspace();
    const pages = await this.notion.getRootPages();

    return {
      workspace,
      pages,
    };
  }
}