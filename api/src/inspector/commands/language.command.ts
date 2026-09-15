import { NotionTaskRepository } from "../../infrastructure/repositories/NotionTaskRepository.js";

const repository = new NotionTaskRepository();

const taskIds = process.argv.slice(2);

if (taskIds.length === 0) {

  console.error(
    "Debes indicar al menos un ID de proyecto."
  );

  console.error(
    "Ejemplo: node --import tsx src/inspector/commands/language.command.ts <PROJECT_ID>"
  );

  process.exit(1);

}

for (const id of taskIds) {

  const task =
    await repository.findById(id);

  console.log(
    "\n================================================"
  );

  console.log(task.name);

  console.log(
    "================================================\n"
  );

  for (const event of task.events) {

    console.log(
      "----------------------------------------"
    );

    console.log("Tipo:", event.type);
    console.log("Autor:", event.author);

    if (event.target) {
      console.log("Destino:", event.target);
    }

    console.log("Texto:", event.text);
    console.log();

  }

}