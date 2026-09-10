import { NotionTaskRepository } from "./src/infrastructure/repositories/NotionTaskRepository.js";
import { TaskAnalyzer } from "./src/application/analyzers/TaskAnalyzer.js";

const repository = new NotionTaskRepository();
const analyzer = new TaskAnalyzer();

const task = await repository.findById(
  "3b92d23e-2665-8019-ab71-def0075e3361"
);

const snapshot = analyzer.analyze(task);

console.dir(snapshot, {
  depth: null,
});