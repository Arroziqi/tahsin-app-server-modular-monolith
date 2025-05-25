export class ScoreEntity {
  public readonly id?: number;
  public value: number;
  public studentId: number;
  public taskId: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public updatedBy?: number;
  public createdBy?: number;

  constructor(props: {
    id?: number;
    value: number;
    studentId: number;
    taskId: number;
    createdAt?: Date;
    updatedAt?: Date;
    updatedBy?: number;
    createdBy?: number;
  }) {
    this.id = props.id;
    this.value = props.value;
    this.studentId = props.studentId;
    this.taskId = props.taskId;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.updatedBy = props.updatedBy;
    this.createdBy = props.createdBy;
  }
}
