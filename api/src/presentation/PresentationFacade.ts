import { Timeline } from "../domain/timeline/Timeline.js";
import { DashboardPresenter } from "./dashboard/DashboardPresenter.js";
import { DashboardJsonRenderer } from "./dashboard/DashboardJsonRenderer.js";
import { TimelineHtmlRenderer } from "./html/TimelineHtmlRenderer.js";
import { TimelinePrinter } from "./TimelinePrinter.js";

export class PresentationFacade {

  static render(timeline: Timeline): void {

    TimelinePrinter.print(timeline);

    TimelineHtmlRenderer.render(timeline);

    const dashboard =
      new DashboardPresenter().present(timeline);

    DashboardJsonRenderer.render(dashboard);

  }

}