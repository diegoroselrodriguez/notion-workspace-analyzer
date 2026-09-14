import { Timeline } from "../domain/timeline/Timeline.js";
import { Task } from "../domain/task/Task.js";
import { WorkflowStatusResolver } from "../application/analyzers/resolvers/WorkflowStatusResolver.js";

import { DashboardPresenter } from "./dashboard/DashboardPresenter.js";
import { DashboardJsonRenderer } from "./dashboard/DashboardJsonRenderer.js";
import { TimelineHtmlRenderer } from "./html/TimelineHtmlRenderer.js";
import { TimelinePrinter } from "./TimelinePrinter.js";

export class PresentationFacade {

  static render(timeline: Timeline): void {

    TimelinePrinter.print(timeline);

    TimelineHtmlRenderer.render(timeline);

    const task =
      new Task(
        timeline.taskId,
        timeline.taskName,
        null,
        [],
        timeline.events.map(event => ({
          type: event.type as any,
          author: event.author,
          text: event.text,
          createdAt: event.createdAt,
          ...(event.target
            ? { target: event.target }
            : {}),
        }))
      );

    const status =
      new WorkflowStatusResolver().resolve(task);

    const dashboard =
      new DashboardPresenter().present(
        timeline,
        status
      );

    DashboardJsonRenderer.render(dashboard);

  }

}