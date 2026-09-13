import type { DashboardData } from "../types/dashboard";
import { Api } from "./api";

const PROJECT_MAP: Record<string, number> = {
  resultados: 2,
  portabilidades: 0,
  proyectos: 1
};

export class DashboardService {

  static async getDashboard(
    projectId: string
  ): Promise<DashboardData> {

    const id =
      PROJECT_MAP[projectId] ?? 2;

    return Api.get(
      `/api/projects/${id}/dashboard`
    );

  }

}