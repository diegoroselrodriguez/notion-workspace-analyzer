export class ActivityAnalyzer {

  analyze(projects: any[]) {

    const people = new Map<string, number>();

    projects.forEach(project => {

      const assigned =
        project.properties?.Asignado?.people ?? [];

      assigned.forEach((person: any) => {

        const name =
          person.name ??
          person.person?.email ??
          "Sin nombre";

        people.set(

          name,

          (people.get(name) ?? 0) + 1

        );

      });

    });

    return [...people.entries()]

      .sort((a, b) => b[1] - a[1])

      .map(([name, projects]) => ({

        name,

        projects

      }));

  }

}