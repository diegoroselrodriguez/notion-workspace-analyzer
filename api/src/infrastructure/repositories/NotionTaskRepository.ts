import type { TaskRepository } from "../../application/repositories/TaskRepository.js";

import { Task } from "../../domain/task/Task.js";
import { CommentEventParser } from "../../application/parsers/comment-event.parser.js";
import { TimelineBuilder } from "../../domain/timeline/TimelineBuilder.js";
import { NotionGateway } from "../notion/notion.gateway.js";
import { NotionTaskMapper } from "../mappers/NotionTaskMapper.js";

export class NotionTaskRepository implements TaskRepository {

  constructor(
    private gateway = new NotionGateway(),
    private parser = new CommentEventParser(),
    private timelineBuilder = new TimelineBuilder(),
    private mapper = new NotionTaskMapper(),
  ) {}

  async findById(id: string): Promise<Task> {

    const page = await this.gateway.getPage(id);

    if (!("properties" in page)) {
      throw new Error("La página no contiene propiedades");
    }

    const comments = await this.gateway.getComments(id);

    const events = comments.results.map(comment =>
      this.parser.parse(comment)
    );

    return this.mapper.toDomain(
      page,
      events,
    );

  }

  async findAll(): Promise<Task[]> {

    throw new Error("Not implemented");

  }

}