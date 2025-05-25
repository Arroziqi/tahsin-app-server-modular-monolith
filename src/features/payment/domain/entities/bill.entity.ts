export class BillEntity {
  public readonly id?: number;
  public studentId: number;
  public bill: number;
  public remainBill: number;
  public description?: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: number;
  public updatedBy?: number;

  constructor(props: {
    id?: number;
    studentId: number;
    bill: number;
    remainBill: number;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: number;
    updatedBy?: number;
  }) {
    this.id = props.id;
    this.studentId = props.studentId;
    this.bill = props.bill;
    this.remainBill = props.remainBill;
    this.description = props.description;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.createdBy = props.createdBy;
    this.updatedBy = props.updatedBy;
  }
}
