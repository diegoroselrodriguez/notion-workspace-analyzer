import { NotionTaskRepository } from "./src/infrastructure/repositories/NotionTaskRepository.js";
import { TaskAnalyzer } from "./src/application/analyzers/TaskAnalyzer.js";
import { CurrentAssigneeResolver } from "./src/application/analyzers/resolvers/CurrentAssigneeResolver.js";
import { WorkflowStatusResolver } from "./src/application/analyzers/resolvers/WorkflowStatusResolver.js";
import { LeadTimeResolver } from "./src/application/analyzers/resolvers/LeadTimeResolver.js";
import { InactiveDaysResolver } from "./src/application/analyzers/resolvers/InactiveDaysResolver.js";
import { TaskStatus } from "./src/domain/task-status/TaskStatus.js";

const repository = new NotionTaskRepository();

const analyzer = new TaskAnalyzer(
  new CurrentAssigneeResolver(),
  new WorkflowStatusResolver(),
  new LeadTimeResolver(),
  new InactiveDaysResolver(),
);

const tasks = await repository.findRecent(100);
const snapshots = tasks.map(task => analyzer.analyze(task));

const statusCount = new Map<TaskStatus, number>();

for (const status of Object.values(TaskStatus)) {
  statusCount.set(status, 0);
}

for (const snapshot of snapshots) {
  statusCount.set(
    snapshot.status,
    (statusCount.get(snapshot.status) ?? 0) + 1,
  );
}

console.log("========================================");
console.log("InsightFlow Dashboard");
console.log("========================================");

console.log();
console.log("Tareas analizadas:", snapshots.length);

console.log();
console.log("Estados");
console.log("--------");

for (const [status, count] of statusCount) {
  console.log(`${status.padEnd(22)} ${count}`);
}

console.log();
console.log("Tareas que requieren atención");
console.log("-----------------------------");

const pending = snapshots.filter(
  snapshot => snapshot.status !== TaskStatus.PUBLISHED,
);

for (const snapshot of pending) {
  console.log(`[${snapshot.status}] ${snapshot.taskName}`);
}