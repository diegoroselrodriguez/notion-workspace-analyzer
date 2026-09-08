import { NotionGateway } from "./notion.gateway.js";

export class WorkspaceScanner {
  constructor(
    private readonly notionGateway = new NotionGateway()
  ) {}

  async scan() {
    const workspace = await this.notionGateway.getWorkspace();
    const pages = await this.notionGateway.getRootPages();

    return {
      workspace,
      pages,
      databases: [],
      blocks: [],
      users: [],
      relations: [],
      statistics: {},
    };
  }
}