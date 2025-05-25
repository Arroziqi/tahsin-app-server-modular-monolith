export class TaskEntity {
  public readonly id?: number;
  public moduleId: number;
  public teacherId: number;
  public task: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  public updatedBy?: number;
  public createdBy?: number;

  constructor(props: {
    id?: number;
    moduleId: number;
    teacherId: number;
    task: string;
    createdAt?: Date;
    updatedAt?: Date;
    updatedBy?: number;
    createdBy?: number;
  }) {
    this.id = props.id;
    this.moduleId = props.moduleId;
    this.teacherId = props.teacherId;
    this.task = props.task;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.updatedBy = props.updatedBy;
    this.createdBy = props.createdBy;
  }
}
