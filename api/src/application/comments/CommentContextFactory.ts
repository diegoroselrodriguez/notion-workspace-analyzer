import type { CommentContext } from "../../domain/comments/CommentContext.js";

export class CommentContextFactory {

  create(comment: any): CommentContext {

    const text = comment.rich_text
      ?.map((item: any) => item.plain_text)
      .join("") ?? "";

    const mentions =
      comment.rich_text
        ?.filter((item: any) => item.type === "mention")
        .map((item: any) => ({
          id: item.mention.user?.id ?? "",
          name: item.mention.user?.name ?? "Unknown",
        })) ?? [];

    const urls =
      comment.rich_text
        ?.filter((item: any) => item.href)
        .map((item: any) => item.href) ?? [];

    const attachments =
      comment.attachments?.map((attachment: any) => ({
        type: attachment.category,
        url: attachment.file.url,
      })) ?? [];

    return {
      id: comment.id,
      author: comment.display_name?.resolved_name ?? "Unknown",
      text,
      createdAt: comment.created_time,
      mentions,
      urls,
      attachments,
    };
  }

}