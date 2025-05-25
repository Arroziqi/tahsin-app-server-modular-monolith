export class BankAccountEntity {
  public readonly id?: number;
  public accountNumber: string;
  public accountName: string;
  public bankName: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  public updatedBy?: number;
  public createdBy?: number;

  constructor(props: {
    id?: number;
    accountNumber: string;
    accountName: string;
    bankName: string;
    createdAt?: Date;
    updatedAt?: Date;
    updatedBy?: number;
    createdBy?: number;
  }) {
    this.id = props.id;
    this.accountNumber = props.accountNumber;
    this.accountName = props.accountName;
    this.bankName = props.bankName;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.updatedBy = props.updatedBy;
    this.createdBy = props.createdBy;
  }
}
