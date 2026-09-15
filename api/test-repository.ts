import { NotionTaskRepository } from "./src/infrastructure/repositories/NotionTaskRepository.js";

const projectId = process.argv[2];

if (!projectId) {
  console.error("Debes indicar un ID de proyecto.");
  console.error(
    "Ejemplo: node --import tsx test-repository.ts <PROJECT_ID>"
  );
  process.exit(1);
}

const repository =
  new NotionTaskRepository();

const task =
  await repository.findById(projectId);

console.dir(task, {
  depth: null,
});