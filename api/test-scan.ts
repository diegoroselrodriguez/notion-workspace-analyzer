import { ScanWorkspaceUseCase } from "./src/application/scan-workspace.use-case.js";

const useCase = new ScanWorkspaceUseCase();

const result = await useCase.execute();

console.dir(result, { depth: null });