import { Api } from "./api";

export type ProjectSummary = {
  id: string;
  name: string;
  lastEditedTime: string;
};

export class ProjectsService {

  static async getProjects(): Promise<ProjectSummary[]> {

    return Api.get("/api/projects");

  }

}
