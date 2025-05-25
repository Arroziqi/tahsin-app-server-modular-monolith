import { Bill } from '@prisma/client';
import { BillEntity } from '../../domain/entities/bill.entity';

export class BillMapper {
  static toEntity(raw: Bill): BillEntity {
    return new BillEntity({
      id: raw.id,
      studentId: raw.studentId,
      bill: raw.bill,
      remainBill: raw.remainBill,
      description: raw.description ?? undefined,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: Bill[]): BillEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
