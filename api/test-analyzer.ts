import { NotionTaskRepository } from "./src/infrastructure/repositories/NotionTaskRepository.js";

const repository = new NotionTaskRepository();

const tasks = await repository.findRecent(10);

for (const task of tasks) {

  console.log("\n================================================");
  console.log(task.name);
  console.log("================================================");

  for (const event of task.events) {

    console.log(
      `${event.type} | ${event.author}` +
      (event.target ? ` -> ${event.target}` : "")
    );

    console.log(event.text);
    console.log();

  }

}