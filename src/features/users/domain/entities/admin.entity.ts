export class AdminEntity {
  public readonly id?: number;
  public noAdmin: string;
  public fullName: string;
  public userId: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: number;
  public updatedBy?: number;

  constructor(props: {
    id?: number;
    noAdmin: string;
    fullName: string;
    userId: number;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: number;
    updatedBy?: number;
  }) {
    this.id = props.id;
    this.noAdmin = props.noAdmin;
    this.fullName = props.fullName;
    this.userId = props.userId;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.createdBy = props.createdBy;
    this.updatedBy = props.updatedBy;
  }
}
