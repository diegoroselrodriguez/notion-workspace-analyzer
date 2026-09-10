export class TaskSnapshot {

  constructor(
    public readonly taskId: string,
    public readonly taskName: string,
    public readonly currentAssignee: string | null,
    public readonly status: string | null,
    public readonly lastActivityAt: string,
    public readonly totalEvents: number,

  ) {}

}