import { GetWorkspaceStructure } from "../../application/use-cases/GetWorkspaceStructure.js";

const useCase = new GetWorkspaceStructure();

const result = await useCase.execute();

console.dir(result, {
  depth: null,
});