import { BuildTeamDashboard } from "../../application/use-cases/BuildTeamDashboard.js";

export async function workloadCommand() {

  const dashboard =
    await new BuildTeamDashboard().execute();

  console.log();
  console.log("══════════════════════════════════════");
  console.log("        TEAM DASHBOARD");
  console.log("══════════════════════════════════════");
  console.log();

  for (const employee of dashboard) {

    console.log(employee.name);
    console.log("────────────────────────────");
    console.log("Asignaciones :", employee.assignments);
    console.log("Entregas     :", employee.deliveries);
    console.log("Publicaciones:", employee.publications);
    console.log("Comentarios  :", employee.comments);
    console.log();

  }

}