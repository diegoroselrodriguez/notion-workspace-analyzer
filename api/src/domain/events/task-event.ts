export enum TaskEventType {
  ASSIGNMENT = "ASSIGNMENT",
  DELIVERY = "DELIVERY",
  REVIEW_REQUEST = "REVIEW_REQUEST",
  REVIEW_COMPLETED = "REVIEW_COMPLETED",
  PUBLICATION_REQUEST = "PUBLICATION_REQUEST",
  PUBLICATION_COMPLETED = "PUBLICATION_COMPLETED",
  COMMENT = "COMMENT"
}

export interface TaskEvent {

  type: TaskEventType;
  author: string;
  target?: string;
  text: string;
  createdAt: string;

}