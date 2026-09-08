const command = process.argv[2];

switch (command) {
  case "workspace":
    await import("./commands/workspace.command.js");
    break;

  case "pages":
    await import("./commands/pages.command.js");
    break;

  case "blocks":
    await import("./commands/blocks.command.js");
    break;

  case "databases":
    await import("./commands/databases.command.js");
    break;

  case "comments":
    await import("./commands/comments.command.js");
    break;
  
  case "tasks":
    await import("./commands/tasks.command.js");
    break;

  case "task":
    await import("./commands/task.command.js");
    break;

  case "timeline":
    await import("./commands/timeline.command.js");
    break;
  
  default:
    console.log(`
Commands:

workspace
pages
blocks
databases
comments
`);
}