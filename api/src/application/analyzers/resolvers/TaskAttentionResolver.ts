import { TaskStatus } from "../../../domain/task-status/TaskStatus.js";
import {
  TaskAttentionLevel,
  type TaskAttention,
} from "../../../domain/task-analysis/TaskAttention.js";

export class TaskAttentionResolver {

  resolve(
    status: TaskStatus,
    inactiveDays: number | null
  ): TaskAttention {

    if (inactiveDays === null) {

      return {
        level: TaskAttentionLevel.OK,
        reason: "No hay actividad suficiente para evaluar el proyecto.",
      };

    }

    if (status === TaskStatus.PUBLISHED) {

      return {
        level: TaskAttentionLevel.OK,
        reason: "El proyecto está publicado.",
      };

    }

    if (inactiveDays >= 6) {

      return {
        level: TaskAttentionLevel.BLOCKED,
        reason:
          `El proyecto lleva ${inactiveDays} días sin actividad.`,
      };

    }

    if (inactiveDays >= 3) {

      return {
        level: TaskAttentionLevel.ATTENTION,
        reason:
          `El proyecto lleva ${inactiveDays} días sin actividad.`,
      };

    }

    return {
      level: TaskAttentionLevel.OK,
      reason:
        `Actividad reciente: ${inactiveDays} días sin cambios.`,
    };

  }

}