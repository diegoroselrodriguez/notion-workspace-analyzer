import type { TaskRepository } from "../../application/repositories/TaskRepository.js";
import { Task } from "../../domain/task/Task.js";
import { CommentEventParser } from "../../application/parsers/comment-event.parser.js";
import { TimelineBuilder } from "../../domain/timeline/TimelineBuilder.js";
import { NotionGateway } from "../notion/notion.gateway.js";
import { NotionTaskMapper } from "../mappers/NotionTaskMapper.js";
import { CommentContextFactory } from "../../application/comments/CommentContextFactory.js";
export declare class NotionTaskRepository implements TaskRepository {
    private gateway;
    private contextFactory;
    private parser;
    private timelineBuilder;
    private mapper;
    private static readonly DESIGN_DATA_SOURCE_ID;
    constructor(gateway?: NotionGateway, contextFactory?: CommentContextFactory, parser?: CommentEventParser, timelineBuilder?: TimelineBuilder, mapper?: NotionTaskMapper);
    findRecent(limit: number): Promise<Task[]>;
    private mapPageToTask;
    findById(id: string): Promise<Task>;
    findAll(): Promise<Task[]>;
}
//# sourceMappingURL=NotionTaskRepository.d.ts.map