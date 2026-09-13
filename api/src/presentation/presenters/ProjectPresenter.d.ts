import type { Timeline } from "../../domain/timeline/Timeline.js";
export interface UserActivity {
    name: string;
    events: number;
}
export interface PresentedProject {
    title: string;
    status: string;
    participants: number;
    events: number;
    assignments: number;
    deliveries: number;
    publications: number;
    duration: number;
    mostActiveUser: string;
    summary: string;
    activity: UserActivity[];
}
export declare class ProjectPresenter {
    static present(timeline: Timeline): PresentedProject;
}
//# sourceMappingURL=ProjectPresenter.d.ts.map