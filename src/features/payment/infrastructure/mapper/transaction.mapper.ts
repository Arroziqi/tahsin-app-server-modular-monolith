import { Transaction } from '@prisma/client';
import { TransactionEntity } from '../../domain/entities/transaction.entity';

export class TransactionMapper {
  static toEntity(raw: Transaction): TransactionEntity {
    return new TransactionEntity({
      id: raw.id,
      billId: raw.billId,
      transactionStatusId: raw.transactionStatusId,
      bankAccountId: raw.bankAccountId,
      transactionTypeId: raw.transactionTypeId,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: Transaction[]): TransactionEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
