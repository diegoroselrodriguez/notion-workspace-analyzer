import { WorkspaceScanner } from "../infrastructure/notion/workspace.scanner.js";

export class ScanWorkspaceUseCase {
  constructor(
    private readonly scanner = new WorkspaceScanner()
  ) {}

  execute() {
    return this.scanner.scan();
  }
}