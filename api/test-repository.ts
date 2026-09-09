import { NotionTaskRepository } from "./src/infrastructure/repositories/NotionTaskRepository.js";

const repository = new NotionTaskRepository();

const task = await repository.findById(
  "3b92d23e-2665-8019-ab71-def0075e3361"
);

console.dir(task, {
  depth: null,
});