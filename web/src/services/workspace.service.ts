import { Api } from "./api";

export interface WorkspacePerson {

  name: string;
  projects: number;

}

export interface WorkspaceData {

  projects: number;

  completed: number;

  active: number;

  people: number;

  topProjects: string[];

  topPeople: string[];

  activity: WorkspacePerson[];

}

export class WorkspaceService {

  static async getWorkspace(): Promise<WorkspaceData> {

    return Api.get("/api/workspace");

  }

}