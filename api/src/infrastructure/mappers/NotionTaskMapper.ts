import { Task } from "../../domain/task/Task.js";
import type { TimelineEvent } from "../../domain/timeline/TimelineEvent.js";

export class NotionTaskMapper {

  toDomain(
    page: any,
    events: TimelineEvent[],
  ): Task {

    const properties = page.properties;

    const name =
      properties.Nombre?.title?.[0]?.plain_text ??
      "Sin nombre";

    const status =
      properties.Status?.select?.name ??
      null;

    const assignees =
      properties.Asignado?.people?.map(
        (person: any) => person.name,
      ) ?? [];

    return new Task(
      page.id,
      name,
      status,
      assignees,
      events,
    );

  }

}