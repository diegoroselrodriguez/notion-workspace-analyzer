import { Task } from "../../domain/task/Task.js";

export interface TaskResolver<TResult> {

  resolve(task: Task): TResult;

}