export class ClassEntity {
  public readonly id?: number;
  public batchId?: number;
  public classPriceId: number;
  public class: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  public updatedBy?: number;
  public createdBy?: number;

  constructor(props: {
    id?: number;
    batchId?: number;
    classPriceId: number;
    class: string;
    createdAt?: Date;
    updatedAt?: Date;
    updatedBy?: number;
    createdBy?: number;
  }) {
    this.id = props.id;
    this.batchId = props.batchId;
    this.classPriceId = props.classPriceId;
    this.class = props.class;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.updatedBy = props.updatedBy;
    this.createdBy = props.createdBy;
  }
}
