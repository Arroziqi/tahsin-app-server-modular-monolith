import { Inject, Injectable } from '@nestjs/common';
import { CLASS_PRICE_REPO_TOKEN } from '../../../../common/constants/provider.token';
import { ClassPriceRepositoryPort } from '../../domain/ports/class-price-repository.port';
import { ClassPriceEntity } from '../../domain/entities/class-price.entity';

@Injectable()
export class ClassPriceService {
  constructor(
    @Inject(CLASS_PRICE_REPO_TOKEN)
    private readonly repo: ClassPriceRepositoryPort,
  ) {}

  async create(data: ClassPriceEntity): Promise<ClassPriceEntity> {
    return this.repo.save(data);
  }

  async getAll(): Promise<ClassPriceEntity[] | null> {
    return this.repo.getAll();
  }

  async update(data: Partial<ClassPriceEntity>): Promise<ClassPriceEntity> {
    return this.repo.update(data);
  }

  async getClassPrice(id: number): Promise<ClassPriceEntity | null> {
    return this.repo.findById(id);
  }

  async delete(id: number): Promise<void> {
    return this.repo.delete(id);
  }

  async checkDuplicateData(data: ClassPriceEntity): Promise<boolean> {
    return !!(await this.repo.countDuplicateData(data));
  }

  async checkClassPriceExistence(id: number): Promise<boolean> {
    return !!(await this.getClassPrice(id));
  }
}
