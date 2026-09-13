import { WorkspaceScanner } from "../infrastructure/notion/workspace.scanner.js";
export class ScanWorkspaceUseCase {
    scanner;
    constructor(scanner = new WorkspaceScanner()) {
        this.scanner = scanner;
    }
    execute() {
        return this.scanner.scan();
    }
}
//# sourceMappingURL=scan-workspace.use-case.js.map