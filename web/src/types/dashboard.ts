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

export interface DashboardData {
  title: string;
  status: string;
  summary: string;
  insights: string[];
  kpis: KPI[];
  activity: ActivityMember[];
  timeline: TimelineEvent[];
}