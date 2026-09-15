import type { DashboardData } from "../types/dashboard";
import { Api } from "./api";

export class DashboardService {

  static async getDashboard(
    projectId: string
  ): Promise<DashboardData> {

    if (!projectId) {
      throw new Error(
        "No se ha indicado ningún proyecto."
      );
    }

    return Api.get(
      `/api/projects/${projectId}/dashboard`
    );

  }

}
