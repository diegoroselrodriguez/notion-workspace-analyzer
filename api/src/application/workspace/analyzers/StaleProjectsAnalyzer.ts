export class StaleProjectsAnalyzer {

  analyze(projects: any[]) {

    const today = new Date();

    return projects

      .map(project => {

        const updated =
          new Date(project.last_edited_time);

        const days = Math.floor(

          (today.getTime() - updated.getTime()) /
          (1000 * 60 * 60 * 24)

        );

        return {

          name:
            project.properties?.Nombre?.title?.[0]?.plain_text ??
            "Sin nombre",

          days

        };

      })

      .sort((a, b) => b.days - a.days);

  }

}