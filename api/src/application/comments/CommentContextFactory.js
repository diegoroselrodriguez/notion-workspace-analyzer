export class CommentContextFactory {
    create(comment) {
        const text = comment.rich_text
            ?.map((item) => item.plain_text)
            .join("") ?? "";
        const mentions = comment.rich_text
            ?.filter((item) => item.type === "mention")
            .map((item) => ({
            id: item.mention.user?.id ?? "",
            name: item.mention.user?.name ?? "Unknown",
        })) ?? [];
        const urls = comment.rich_text
            ?.filter((item) => item.href)
            .map((item) => item.href) ?? [];
        const attachments = comment.attachments?.map((attachment) => ({
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
//# sourceMappingURL=CommentContextFactory.js.map