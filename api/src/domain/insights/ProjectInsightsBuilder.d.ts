import type { Timeline } from "../timeline/Timeline.js";
export type InsightType = "success" | "warning" | "info";
export interface ProjectInsight {
    type: InsightType;
    title: string;
    description: string;
}
export declare class ProjectInsightsBuilder {
    build(timeline: Timeline): ProjectInsight[];
}
//# sourceMappingURL=ProjectInsightsBuilder.d.ts.map