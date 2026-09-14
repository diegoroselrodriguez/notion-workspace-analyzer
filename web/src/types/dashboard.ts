export type TimelineEventType =
  | "comment"
  | "assignment"
  | "delivery"
  | "publication_request"
  | "publication_completed"
  | "review_request"
  | "review_completed";

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

export type AttentionLevel =
  | "OK"
  | "ATTENTION"
  | "BLOCKED";

export interface ProjectAttention {
  level: AttentionLevel;
  reason: string;
}

export interface DashboardData {
  title: string;
  status: string;
  summary: string;
  insights: string[];
  attention: ProjectAttention;
  kpis: KPI[];
  activity: ActivityMember[];
  timeline: TimelineEvent[];
}