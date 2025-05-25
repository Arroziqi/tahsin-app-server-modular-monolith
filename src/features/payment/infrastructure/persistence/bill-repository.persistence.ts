import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { BillMapper } from '../mapper/bill.mapper';
import { BillRepositoryPort } from '../../domain/ports/bill-repository.port';
import { BillEntity } from '../../domain/entities/bill.entity';

@Injectable()
export class BillRepositoryPersistence implements BillRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async countDuplicateData(data: BillEntity): Promise<number> {
    return this.prisma.bill.count({
      where: data,
    });
  }

  async findById(id: number): Promise<BillEntity | null> {
    const result = await this.prisma.bill.findFirst({
      where: { id },
    });
    return result ? BillMapper.toEntity(result) : null;
  }

  async getAll(): Promise<BillEntity[] | null> {
    const result = await this.prisma.bill.findMany();
    return result.length ? BillMapper.toEntityList(result) : null;
  }

  async save(data: BillEntity): Promise<BillEntity> {
    const created = await this.prisma.bill.create({
      data: data,
    });
    return BillMapper.toEntity(created);
  }

  async update(data: Partial<BillEntity>): Promise<BillEntity> {
    if (!data.id) {
      throw new Error('Bill ID is required to update');
    }

    const updated = await this.prisma.bill.update({
      where: { id: data.id },
      data: data,
    });

    return BillMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.bill.delete({
      where: { id },
    });
  }
}
