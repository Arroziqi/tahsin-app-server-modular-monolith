import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { TransactionStatusEntity } from '../../domain/entities/transaction-status.entity';
import { TransactionStatusRepositoryPort } from '../../domain/ports/transaction-status-repository.port';
import { TransactionStatusMapper } from '../mapper/transaction-status.mapper';

@Injectable()
export class TransactionStatusRepositoryPersistence
  implements TransactionStatusRepositoryPort
{
  constructor(private readonly prisma: PrismaService) {}

  async countDuplicateData(data: TransactionStatusEntity): Promise<number> {
    return this.prisma.transactionStatus.count({
      where: data,
    });
  }

  async findById(id: number): Promise<TransactionStatusEntity | null> {
    const result = await this.prisma.transactionStatus.findFirst({
      where: { id },
    });
    return result ? TransactionStatusMapper.toEntity(result) : null;
  }

  async getAll(): Promise<TransactionStatusEntity[] | null> {
    const result = await this.prisma.transactionStatus.findMany();
    return result.length ? TransactionStatusMapper.toEntityList(result) : null;
  }

  async save(data: TransactionStatusEntity): Promise<TransactionStatusEntity> {
    const created = await this.prisma.transactionStatus.create({
      data: data,
    });
    return TransactionStatusMapper.toEntity(created);
  }

  async update(
    data: Partial<TransactionStatusEntity>,
  ): Promise<TransactionStatusEntity> {
    if (!data.id) {
      throw new Error('TransactionStatus ID is required to update');
    }

    const updated = await this.prisma.transactionStatus.update({
      where: { id: data.id },
      data: data,
    });

    return TransactionStatusMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.transactionStatus.delete({
      where: { id },
    });
  }
}
