import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { TransactionTypeMapper } from '../mapper/transaction-type.mapper';
import { TransactionTypeRepositoryPort } from '../../domain/ports/transaction-type-repository.port';
import { TransactionTypeEntity } from '../../domain/entities/transaction-type.entity';

@Injectable()
export class TransactionTypeRepositoryPersistence
  implements TransactionTypeRepositoryPort
{
  constructor(private readonly prisma: PrismaService) {}

  async countDuplicateData(data: TransactionTypeEntity): Promise<number> {
    return this.prisma.transactionType.count({
      where: data,
    });
  }

  async findById(id: number): Promise<TransactionTypeEntity | null> {
    const result = await this.prisma.transactionType.findFirst({
      where: { id },
    });
    return result ? TransactionTypeMapper.toEntity(result) : null;
  }

  async getAll(): Promise<TransactionTypeEntity[] | null> {
    const result = await this.prisma.transactionType.findMany();
    return result.length ? TransactionTypeMapper.toEntityList(result) : null;
  }

  async save(data: TransactionTypeEntity): Promise<TransactionTypeEntity> {
    const created = await this.prisma.transactionType.create({
      data: data,
    });
    return TransactionTypeMapper.toEntity(created);
  }

  async update(
    data: Partial<TransactionTypeEntity>,
  ): Promise<TransactionTypeEntity> {
    if (!data.id) {
      throw new Error('TransactionType ID is required to update');
    }

    const updated = await this.prisma.transactionType.update({
      where: { id: data.id },
      data: data,
    });

    return TransactionTypeMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.transactionType.delete({
      where: { id },
    });
  }
}
