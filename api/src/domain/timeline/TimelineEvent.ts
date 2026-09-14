export enum TimelineEventType {
  COMMENT = "COMMENT",
  ASSIGNMENT = "ASSIGNMENT",
  DELIVERY = "DELIVERY",
  REVIEW_REQUEST = "REVIEW_REQUEST",
  REVIEW_COMPLETED = "REVIEW_COMPLETED",
  PUBLICATION_REQUEST = "PUBLICATION_REQUEST",
  PUBLICATION_COMPLETED = "PUBLICATION_COMPLETED",
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