import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { TransactionEntity } from '../../domain/entities/transaction.entity';
import { TransactionRepositoryPort } from '../../domain/ports/transaction-repository.port';
import { TransactionMapper } from '../mapper/transaction.mapper';

@Injectable()
export class TransactionRepositoryPersistence
  implements TransactionRepositoryPort
{
  constructor(private readonly prisma: PrismaService) {}

  async countDuplicateData(data: TransactionEntity): Promise<number> {
    return this.prisma.transaction.count({
      where: data,
    });
  }

  async findById(id: number): Promise<TransactionEntity | null> {
    const result = await this.prisma.transaction.findFirst({
      where: { id },
    });
    return result ? TransactionMapper.toEntity(result) : null;
  }

  async getAll(): Promise<TransactionEntity[] | null> {
    const result = await this.prisma.transaction.findMany();
    return result.length ? TransactionMapper.toEntityList(result) : null;
  }

  async save(data: TransactionEntity): Promise<TransactionEntity> {
    const created = await this.prisma.transaction.create({
      data: data,
    });
    return TransactionMapper.toEntity(created);
  }

  async update(data: Partial<TransactionEntity>): Promise<TransactionEntity> {
    if (!data.id) {
      throw new Error('Transaction ID is required to update');
    }

    const updated = await this.prisma.transaction.update({
      where: { id: data.id },
      data: data,
    });

    return TransactionMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.transaction.delete({
      where: { id },
    });
  }
}
