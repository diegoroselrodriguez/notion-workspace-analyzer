import type { EmployeeWorkload } from "../../application/dashboard/EmployeeWorkload.js";
import type { TeamDashboard } from "./TeamDashboard.js";

export class TeamDashboardPresenter {

  present(
    employees: EmployeeWorkload[],
  ): TeamDashboard {

    return {

      employees,

      totalEmployees: employees.length,

      totalAssignments: employees.reduce(
        (sum, employee) => sum + employee.assignments,
        0,
      ),

      totalDeliveries: employees.reduce(
        (sum, employee) => sum + employee.deliveries,
        0,
      ),

      totalPublications: employees.reduce(
        (sum, employee) => sum + employee.publications,
        0,
      ),

      totalComments: employees.reduce(
        (sum, employee) => sum + employee.comments,
        0,
      ),

    };

  }

}