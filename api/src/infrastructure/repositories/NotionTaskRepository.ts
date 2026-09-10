import type { TaskRepository } from "../../application/repositories/TaskRepository.js";

import { Task } from "../../domain/task/Task.js";
import { CommentEventParser } from "../../application/parsers/comment-event.parser.js";
import { TimelineBuilder } from "../../domain/timeline/TimelineBuilder.js";
import { NotionGateway } from "../notion/notion.gateway.js";
import { NotionTaskMapper } from "../mappers/NotionTaskMapper.js";
import { CommentContextFactory } from "../../application/comments/CommentContextFactory.js";

export class NotionTaskRepository implements TaskRepository {

  private static readonly DESIGN_DATA_SOURCE_ID =
    "4f68b74a-6e4f-495e-8f33-864a3feb3796";

  constructor(
    private gateway = new NotionGateway(),
    private contextFactory = new CommentContextFactory(),
    private parser = new CommentEventParser(),
    private timelineBuilder = new TimelineBuilder(),
    private mapper = new NotionTaskMapper(),
  ) {}

  async findRecent(limit: number): Promise<Task[]> {

    const result = await this.gateway.queryDataSource(
      NotionTaskRepository.DESIGN_DATA_SOURCE_ID,
      {
        page_size: limit,
        sorts: [
          {
            timestamp: "last_edited_time",
            direction: "descending",
          },
        ],
      },
    );

    const tasks: Task[] = [];

    for (const page of result.results) {
      tasks.push(await this.mapPageToTask(page));
    }

    return tasks;

  }

  private async mapPageToTask(page: any): Promise<Task> {

    if (!("properties" in page)) {
      throw new Error("La página no contiene propiedades");
    }

    const comments = await this.gateway.getComments(page.id);

    const events = comments.results.map(comment => {
      const context = this.contextFactory.create(comment);
      return this.parser.parse(context);
    });

    return this.mapper.toDomain(
      page,
      events,
    );

  }

  async findById(id: string): Promise<Task> {

    const page = await this.gateway.getPage(id);

    return this.mapPageToTask(page);

  }

  async findAll(): Promise<Task[]> {

    throw new Error("Not implemented");

  }

}