import { Task } from "../../domain/task/Task.js";
import { CommentEventParser } from "../../application/parsers/comment-event.parser.js";
import { TimelineBuilder } from "../../domain/timeline/TimelineBuilder.js";
import { NotionGateway } from "../notion/notion.gateway.js";
import { NotionTaskMapper } from "../mappers/NotionTaskMapper.js";
import { CommentContextFactory } from "../../application/comments/CommentContextFactory.js";
export class NotionTaskRepository {
    gateway;
    contextFactory;
    parser;
    timelineBuilder;
    mapper;
    static DESIGN_DATA_SOURCE_ID = "4f68b74a-6e4f-495e-8f33-864a3feb3796";
    constructor(gateway = new NotionGateway(), contextFactory = new CommentContextFactory(), parser = new CommentEventParser(), timelineBuilder = new TimelineBuilder(), mapper = new NotionTaskMapper()) {
        this.gateway = gateway;
        this.contextFactory = contextFactory;
        this.parser = parser;
        this.timelineBuilder = timelineBuilder;
        this.mapper = mapper;
    }
    async findRecent(limit) {
        const result = await this.gateway.queryDataSource(NotionTaskRepository.DESIGN_DATA_SOURCE_ID, {
            page_size: limit,
            sorts: [
                {
                    timestamp: "last_edited_time",
                    direction: "descending",
                },
            ],
        });
        const tasks = [];
        for (const page of result.results) {
            tasks.push(await this.mapPageToTask(page));
        }
        return tasks;
    }
    async mapPageToTask(page) {
        if (!("properties" in page)) {
            throw new Error("La página no contiene propiedades");
        }
        const comments = await this.gateway.getComments(page.id);
        const events = comments.results.map(comment => {
            const context = this.contextFactory.create(comment);
            return this.parser.parse(context);
        });
        return this.mapper.toDomain(page, events);
    }
    async findById(id) {
        const page = await this.gateway.getPage(id);
        return this.mapPageToTask(page);
    }
    async findAll() {
        throw new Error("Not implemented");
    }
}
//# sourceMappingURL=NotionTaskRepository.js.map