import { AttendanceStatusEnum } from '../../../../common/types/enum/attendance-status.enum';

export class AttendanceEntity {
  public readonly id?: number;
  public attendance: AttendanceStatusEnum;
  public studentId: number;
  public scheduleId: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public updatedBy?: number;
  public createdBy?: number;

  constructor(props: {
    id?: number;
    attendance: AttendanceStatusEnum;
    studentId: number;
    scheduleId: number;
    createdAt?: Date;
    updatedAt?: Date;
    updatedBy?: number;
    createdBy?: number;
  }) {
    this.id = props.id;
    this.attendance = props.attendance;
    this.studentId = props.studentId;
    this.scheduleId = props.scheduleId;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.updatedBy = props.updatedBy;
    this.createdBy = props.createdBy;
  }
}
