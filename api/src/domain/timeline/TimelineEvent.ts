export enum TimelineEventType {
  COMMENT = "COMMENT",
  ASSIGNMENT = "ASSIGNMENT",
  DELIVERY = "DELIVERY",
  REVIEW = "REVIEW",
  PUBLICATION = "PUBLICATION",
  FILE_REFERENCE = "FILE_REFERENCE",
  IMAGE_ATTACHMENT = "IMAGE_ATTACHMENT",
}

export interface TimelineEvent {
  type: TimelineEventType;
  author: string;
  createdAt: string;
  text: string;
  target?: string;
  metadata?: Record<string, unknown>;
}