export type TimelineEventType =
  | "comment"
  | "assignment"
  | "delivery"
  | "publication";

export interface TimelineEvent {

  type: TimelineEventType;

  author: string;

  date: string;

  description: string;

}

export interface ActivityMember {

  name: string;

  events: number;

}

export interface KPI {

  label: string;

  value: number;

}

export interface ProjectInsight {

  icon: string;

  title: string;

  description: string;

}

export interface DashboardData {

  title: string;

  status: string;

  summary: string;

  insights?: ProjectInsight[];

  kpis: KPI[];

  activity: ActivityMember[];

  timeline: TimelineEvent[];

}