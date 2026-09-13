import { ActivityAnalyzer } from "./analyzers/ActivityAnalyzer.js";
import { StaleProjectsAnalyzer } from "./analyzers/StaleProjectsAnalyzer.js";

type Project = any;

export class WorkspaceAnalyzer {

  analyze(projects: Project[]) {

    const activity =
      new ActivityAnalyzer().analyze(projects);

    const stale =
      new StaleProjectsAnalyzer().analyze(projects);

    let completed = 0;
    let active = 0;

    projects.forEach(project => {

      const status =
        project.properties?.Estado?.status?.name ??
        project.properties?.Estado?.select?.name ??
        project.properties?.Status?.status?.name ??
        project.properties?.Status?.select?.name ??
        "";

      const value =
        status.toLowerCase();

      if (

        value.includes("final") ||
        value.includes("done") ||
        value.includes("cerr") ||
        value.includes("complet")

      ) {

        completed++;

      } else {

        active++;

      }

    });

    return {

      projects: projects.length,

      completed,

      active,

      people: activity.length,

      topProjects:

        stale
          .slice(0, 10)
          .map(project =>
            project.name?.trim()
              ? project.name
              : "Proyecto sin título"
          ),

      topPeople:

        activity
          .slice(0, 10)
          .map(person => person.name),

      activity,

      stale

    };

  }

}