import { TransactionStatus } from '@prisma/client';
import { TransactionStatusEntity } from '../../domain/entities/transaction-status.entity';

export class TransactionStatusMapper {
  static toEntity(raw: TransactionStatus): TransactionStatusEntity {
    return new TransactionStatusEntity({
      id: raw.id,
      status: raw.status,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: TransactionStatus[]): TransactionStatusEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
