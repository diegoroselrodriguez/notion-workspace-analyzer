import type { Timeline } from "../../domain/timeline/Timeline.js";
import { TimelineEventType } from "../../domain/timeline/TimelineEvent.js";
import type { EmployeeWorkload } from "./EmployeeWorkload.js";

export class WorkloadCalculator {

  calculate(
    timelines: Timeline[],
  ): EmployeeWorkload[] {

    const employees = new Map<string, EmployeeWorkload>();

    for (const timeline of timelines) {

      for (const event of timeline.events) {

        let employee =
          employees.get(event.author);

        if (!employee) {

          employee = {
            name: event.author,
            assignments: 0,
            deliveries: 0,
            publications: 0,
            comments: 0,
          };

          employees.set(
            event.author,
            employee,
          );

        }

        switch (event.type) {

          case TimelineEventType.ASSIGNMENT:
            employee.assignments++;
            break;

          case TimelineEventType.DELIVERY:
            employee.deliveries++;
            break;

          case TimelineEventType.PUBLICATION:
            employee.publications++;
            break;

          default:
            employee.comments++;

        }

      }

    }

    return [...employees.values()]
      .sort((a, b) => b.comments - a.comments);

  }

}