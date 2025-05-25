export class TransactionEntity {
  public readonly id?: number;
  public billId: number;
  public transactionTypeId: number;
  public transactionStatusId: number;
  public bankAccountId: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: number;
  public updatedBy?: number;

  constructor(props: {
    id?: number;
    billId: number;
    transactionTypeId: number;
    transactionStatusId: number;
    bankAccountId: number;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: number;
    updatedBy?: number;
  }) {
    this.id = props.id;
    this.billId = props.billId;
    this.transactionTypeId = props.transactionTypeId;
    this.transactionStatusId = props.transactionStatusId;
    this.bankAccountId = props.bankAccountId;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.createdBy = props.createdBy;
    this.updatedBy = props.updatedBy;
  }
}
