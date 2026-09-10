import { NotionTaskRepository } from "./src/infrastructure/repositories/NotionTaskRepository.js";

const repository = new NotionTaskRepository();

const tasks = await repository.findRecent(10);

console.log("\n===== ÚLTIMAS TAREAS =====\n");

for (const task of tasks) {

  console.log("--------------------------------------");
  console.log("Nombre:", task.name);
  console.log("Estado:", task.status);
  console.log("Eventos:", task.events.length);
  console.log(
    "Última actividad:",
    task.events.at(-1)?.createdAt ?? "Sin actividad"
  );

}