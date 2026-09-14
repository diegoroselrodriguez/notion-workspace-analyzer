import type { EmployeeWorkload } from "../../application/dashboard/EmployeeWorkload.js";

export interface TeamDashboard {

  employees: EmployeeWorkload[];

  totalEmployees: number;

  totalAssignments: number;

  totalDeliveries: number;

  totalPublications: number;

  totalComments: number;

}