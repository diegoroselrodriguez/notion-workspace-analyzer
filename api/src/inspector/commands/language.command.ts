import { NotionTaskRepository } from "../../infrastructure/repositories/NotionTaskRepository.js";

const repository = new NotionTaskRepository();

const TASKS = [
  "3b92d23e-2665-8019-ab71-def0075e3361",
];

for (const id of TASKS) {

  const task = await repository.findById(id);

  console.log("\n================================================");
  console.log(task.name);
  console.log("================================================\n");

  for (const event of task.events) {

    console.log("----------------------------------------");
    console.log("Tipo:", event.type);
    console.log("Autor:", event.author);

    if (event.target) {
      console.log("Destino:", event.target);
    }

    console.log("Texto:", event.text);
    console.log();

  }

}