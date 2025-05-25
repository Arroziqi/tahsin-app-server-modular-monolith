export class DayEntity {
  public readonly id?: number;
  public day: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  public updatedBy?: number;
  public createdBy?: number;

  constructor(props: {
    id?: number;
    day: string;
    createdAt?: Date;
    updatedAt?: Date;
    updatedBy?: number;
    createdBy?: number;
  }) {
    this.id = props.id;
    this.day = props.day;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.updatedBy = props.updatedBy;
    this.createdBy = props.createdBy;
  }
}
