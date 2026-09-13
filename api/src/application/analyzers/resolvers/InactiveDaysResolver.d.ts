import type { TaskResolver } from "../TaskResolver.js";
import type { Task } from "../../../domain/task/Task.js";
export declare class InactiveDaysResolver implements TaskResolver<number | null> {
    resolve(task: Task): number | null;
}
//# sourceMappingURL=InactiveDaysResolver.d.ts.map