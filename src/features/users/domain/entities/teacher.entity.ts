export class TeacherEntity {
  public readonly id?: number;
  public fullName: string;
  public nip: string;
  public accountNumber?: string;
  public accountName?: string;
  public bankName?: string;
  public userId: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public updatedBy?: number;
  public createdBy?: number;

  constructor(props: {
    id?: number;
    fullName: string;
    nip: string;
    accountNumber?: string;
    accountName?: string;
    bankName?: string;
    userId: number;
    createdAt?: Date;
    updatedAt?: Date;
    updatedBy?: number;
    createdBy?: number;
  }) {
    this.id = props.id;
    this.fullName = props.fullName;
    this.nip = props.nip;
    this.accountNumber = props.accountNumber;
    this.accountName = props.accountName;
    this.bankName = props.bankName;
    this.userId = props.userId;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.updatedBy = props.updatedBy;
    this.createdBy = props.createdBy;
  }
}
