export enum TaskAttentionLevel {
  OK = "OK",
  ATTENTION = "ATTENTION",
  BLOCKED = "BLOCKED",
}

export interface TaskAttention {
  level: TaskAttentionLevel;
  reason: string;
}