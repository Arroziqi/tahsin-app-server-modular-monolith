export class ScheduleEntity {
  public readonly id?: number;
  public classId: number;
  public teacherId: number;
  public dayId: number;
  public timeId: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public updatedBy?: number;
  public createdBy?: number;

  constructor(props: {
    id?: number;
    classId: number;
    teacherId: number;
    dayId: number;
    timeId: number;
    createdAt?: Date;
    updatedAt?: Date;
    updatedBy?: number;
    createdBy?: number;
  }) {
    this.id = props.id;
    this.classId = props.classId;
    this.teacherId = props.teacherId;
    this.dayId = props.dayId;
    this.timeId = props.timeId;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.updatedBy = props.updatedBy;
    this.createdBy = props.createdBy;
  }
}
