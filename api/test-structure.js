import { GetWorkspaceStructure } from "./src/application/use-cases/GetWorkspaceStructure.js";
const useCase = new GetWorkspaceStructure();
const result = await useCase.execute();
console.dir(result, {
    depth: null,
});
//# sourceMappingURL=test-structure.js.map