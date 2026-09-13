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
        project.properties?.Status?.status?.name ??
        project.properties?.Status?.select?.name ??
        "";

      const value = status.toLowerCase();

      if (

        value.includes("final") ||
        value.includes("done") ||
        value.includes("cerr")

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
          .map(project => project.name),

      topPeople:

        activity
          .slice(0, 10)
          .map(person => person.name),

      activity,

      stale

    };

  }

}