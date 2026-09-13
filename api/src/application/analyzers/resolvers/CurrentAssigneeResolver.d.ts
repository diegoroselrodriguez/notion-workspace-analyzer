import type { TaskResolver } from "../TaskResolver.js";
import { Task } from "../../../domain/task/Task.js";
export declare class CurrentAssigneeResolver implements TaskResolver<string | null> {
    resolve(task: Task): string | null;
}
//# sourceMappingURL=CurrentAssigneeResolver.d.ts.map