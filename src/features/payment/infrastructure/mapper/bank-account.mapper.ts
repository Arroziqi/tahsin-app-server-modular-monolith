import { BankAccount } from '@prisma/client';
import { BankAccountEntity } from '../../domain/entities/bank-account.entity';

export class BankAccountMapper {
  static toEntity(raw: BankAccount): BankAccountEntity {
    return new BankAccountEntity({
      id: raw.id,
      accountNumber: raw.accountNumber,
      accountName: raw.accountName,
      bankName: raw.bankName,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: BankAccount[]): BankAccountEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
