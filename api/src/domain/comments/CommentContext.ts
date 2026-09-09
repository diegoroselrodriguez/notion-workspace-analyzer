export interface CommentMention {
  id: string;
  name: string;
}

export interface CommentAttachment {
  type: string;
  url: string;
}

export interface CommentContext {
  id: string;
  author: string;
  text: string;
  createdAt: string;
  mentions: CommentMention[];
  urls: string[];
  attachments: CommentAttachment[];
}