import { ClassPrice } from '@prisma/client';
import { ClassPriceEntity } from '../../domain/entities/class-price.entity';

export class ClassPriceMapper {
  static toEntity(raw: ClassPrice): ClassPriceEntity {
    return new ClassPriceEntity({
      id: raw.id,
      price: raw.price,
      createdAt: raw.createdAt ?? undefined,
      updatedAt: raw.updatedAt ?? undefined,
      createdBy: raw.createdBy ?? undefined,
      updatedBy: raw.updatedBy ?? undefined,
    });
  }

  static toEntityList(rawList: ClassPrice[]): ClassPriceEntity[] {
    return rawList.map((raw) => this.toEntity(raw));
  }
}
