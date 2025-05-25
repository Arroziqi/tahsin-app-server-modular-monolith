import { TransactionType } from '@prisma/client';
import { TransactionTypeEntity } from '../../domain/entities/transaction-type.entity';

export class TransactionTypeMapper {
  static toEntity(raw: TransactionType): TransactionTypeEntity {
    return new TransactionTypeEntity({
      id: raw.id,
      type: raw.type,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: TransactionType[]): TransactionTypeEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
