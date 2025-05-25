import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { BankAccountMapper } from '../mapper/bank-account.mapper';
import { BankAccountRepositoryPort } from '../../domain/ports/bank-account-repository.port';
import { BankAccountEntity } from '../../domain/entities/bank-account.entity';

@Injectable()
export class BankAccountRepositoryPersistence
  implements BankAccountRepositoryPort
{
  constructor(private readonly prisma: PrismaService) {}

  async countDuplicateData(data: BankAccountEntity): Promise<number> {
    return this.prisma.bankAccount.count({
      where: data,
    });
  }

  async findById(id: number): Promise<BankAccountEntity | null> {
    const result = await this.prisma.bankAccount.findFirst({
      where: { id },
    });
    return result ? BankAccountMapper.toEntity(result) : null;
  }

  async getAll(): Promise<BankAccountEntity[] | null> {
    const result = await this.prisma.bankAccount.findMany();
    return result.length ? BankAccountMapper.toEntityList(result) : null;
  }

  async save(data: BankAccountEntity): Promise<BankAccountEntity> {
    const created = await this.prisma.bankAccount.create({
      data: data,
    });
    return BankAccountMapper.toEntity(created);
  }

  async update(data: Partial<BankAccountEntity>): Promise<BankAccountEntity> {
    if (!data.id) {
      throw new Error('BankAccount ID is required to update');
    }

    const updated = await this.prisma.bankAccount.update({
      where: { id: data.id },
      data: data,
    });

    return BankAccountMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.bankAccount.delete({
      where: { id },
    });
  }
}
