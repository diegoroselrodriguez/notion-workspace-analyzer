import { Task } from "../../domain/task/Task.js";
export interface TaskRepository {
    findById(id: string): Promise<Task>;
    findAll(): Promise<Task[]>;
    findRecent(limit: number): Promise<Task[]>;
}
//# sourceMappingURL=TaskRepository.d.ts.map