import { Task } from "../../domain/task/Task.js";
export class NotionTaskMapper {
    toDomain(page, events) {
        const properties = page.properties;
        const name = properties.Nombre?.title?.[0]?.plain_text ??
            "Sin nombre";
        const status = properties.Status?.select?.name ??
            null;
        const assignees = properties.Asignado?.people?.map((person) => person.name) ?? [];
        return new Task(page.id, name, status, assignees, events);
    }
}
//# sourceMappingURL=NotionTaskMapper.js.map