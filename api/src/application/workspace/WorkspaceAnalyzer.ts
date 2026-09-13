import { ActivityAnalyzer } from "./analyzers/ActivityAnalyzer.js";

type Project = any;

export class WorkspaceAnalyzer {

  analyze(projects: Project[]) {

    const activity =
      new ActivityAnalyzer().analyze(projects);

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

    const topProjects =

      projects

        .map(project => ({

          name:
            project.properties?.Nombre?.title?.[0]?.plain_text ??
            "Sin nombre",

          updated:
            project.last_edited_time

        }))

        .sort(
          (a, b) =>
            new Date(b.updated).getTime() -
            new Date(a.updated).getTime()
        )

        .slice(0, 10)

        .map(project => project.name);

    return {

      projects: projects.length,

      completed,

      active,

      people: activity.length,

      topProjects,

      topPeople:
        activity
          .slice(0, 10)
          .map(person => person.name),

      activity

    };

  }

}