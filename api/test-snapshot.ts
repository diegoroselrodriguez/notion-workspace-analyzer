import { NotionTaskRepository } from "./src/infrastructure/repositories/NotionTaskRepository.js";
import { TaskAnalyzer } from "./src/application/analyzers/TaskAnalyzer.js";
import { CurrentAssigneeResolver } from "./src/application/analyzers/resolvers/CurrentAssigneeResolver.js";
import { WorkflowStatusResolver } from "./src/application/analyzers/resolvers/WorkflowStatusResolver.js";
import { LeadTimeResolver } from "./src/application/analyzers/resolvers/LeadTimeResolver.js";

const repository = new NotionTaskRepository();

const analyzer = new TaskAnalyzer(
  new CurrentAssigneeResolver(),
  new WorkflowStatusResolver(),
  new LeadTimeResolver(),
);

const tasks = await repository.findRecent(10);

for (const task of tasks) {

  const snapshot = analyzer.analyze(task);

  console.log("----------------------------------------");
  console.log(snapshot.taskName);
  console.log("Estado:", snapshot.status);
  console.log("Responsable:", snapshot.currentAssignee ?? "-");
  console.log("Eventos:", snapshot.totalEvents);

  if (snapshot.leadTime === null) {
    console.log("Lead Time: -");
  } else {
    const totalMinutes = Math.floor(snapshot.leadTime / 1000 / 60);
    const days = Math.floor(totalMinutes / 1440);
    const hours = Math.floor((totalMinutes % 1440) / 60);
    const minutes = totalMinutes % 60;

    console.log(
      `Lead Time: ${days}d ${hours}h ${minutes}m`,
    );
  }

  console.log();

}