import type { TimelineEvent } from "../../domain/timeline/TimelineEvent.js";
export interface PresentedEvent {
    icon: string;
    title: string;
    author: string;
    date: string;
    description: string;
}
export declare class EventPresenter {
    static present(event: TimelineEvent): PresentedEvent;
}
//# sourceMappingURL=EventPresenter.d.ts.map