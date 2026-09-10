import { NotionTaskRepository } from "./src/infrastructure/repositories/NotionTaskRepository.js";

import { TaskAnalyzer } from "./src/application/analyzers/TaskAnalyzer.js";

import { CurrentAssigneeResolver } from "./src/application/analyzers/resolvers/CurrentAssigneeResolver.js";
import { WorkflowStatusResolver } from "./src/application/analyzers/resolvers/WorkflowStatusResolver.js";

const repository = new NotionTaskRepository();

const analyzer = new TaskAnalyzer(
  new CurrentAssigneeResolver(),
  new WorkflowStatusResolver(),
);

const task = await repository.findById(
  "3b92d23e-2665-8019-ab71-def0075e3361"
);

const snapshot = analyzer.analyze(task);

console.dir(snapshot, {
  depth: null,
});