import type { DashboardData } from "../types/dashboard";
import { Api } from "./api";

const PROJECT_MAP: Record<string, string> = {
  resultados: "3b92d23e-2665-8019-ab71-def0075e3361",
  portabilidades: "3cd2d23e-2665-8012-b412-f635d03ee4af",
  "venta-smart": "22c2d23e-2665-8055-af0c-d88ee304a99c",
};

export class DashboardService {

  static async getDashboard(
    projectId: string
  ): Promise<DashboardData> {

    const notionPageId = PROJECT_MAP[projectId];

    if (!notionPageId) {
      throw new Error(
        `Proyecto no configurado: ${projectId}`
      );
    }

    return Api.get(
      `/api/projects/${notionPageId}/dashboard`
    );

  }

}