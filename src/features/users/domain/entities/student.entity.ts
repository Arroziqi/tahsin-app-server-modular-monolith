export class StudentEntity {
  public readonly id?: number;
  public fullName: string;
  public motivation: string;
  public userId: number;
  public levelId?: number;
  public classId: number;
  public enrollmentId: number;
  public studentStatusId?: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: number;
  public updatedBy?: number;

  constructor(props: {
    id?: number;
    fullName: string;
    motivation: string;
    userId: number;
    levelId?: number;
    classId: number;
    enrollmentId: number;
    studentStatusId?: number;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: number;
    updatedBy?: number;
  }) {
    this.id = props.id;
    this.fullName = props.fullName;
    this.motivation = props.motivation;
    this.userId = props.userId;
    this.levelId = props.levelId;
    this.classId = props.classId;
    this.enrollmentId = props.enrollmentId;
    this.studentStatusId = props.studentStatusId;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.createdBy = props.createdBy;
    this.updatedBy = props.updatedBy;
  }
}
