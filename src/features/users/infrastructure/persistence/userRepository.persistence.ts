import { Injectable } from '@nestjs/common';
import { UserRepositoryPort } from '../../domain/ports/userRepository.port';
import { UserEntity } from '../../domain/entities/user.entity';
import { PrismaService } from '../../../../common/services/database/prisma.service';
import { UserMapper } from '../mapper/user.mapper';

@Injectable()
export class UserRepositoryPersistence implements UserRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: number): Promise<UserEntity | null> {
    const result = await this.prisma.user.findFirst({
      where: { id },
    });
    return result ? UserMapper.toEntity(result) : null;
  }
  async findByUsername(username: string): Promise<UserEntity | null> {
    const result = await this.prisma.user.findUnique({
      where: { username },
    });
    return result ? UserMapper.toEntity(result) : null;
  }

  async getAll(): Promise<UserEntity[] | null> {
    const result = await this.prisma.user.findMany();
    return result.length ? UserMapper.toEntityList(result) : null;
  }

  async countByUsername(username: string): Promise<number> {
    return this.prisma.user.count({
      where: { username },
    });
  }

  async save(user: UserEntity): Promise<UserEntity> {
    const created = await this.prisma.user.create({
      data: {
        username: user.username,
        email: user.email,
        password: user.password,
        token: user.token,
        createdBy: user.createdBy,
      },
    });
    return UserMapper.toEntity(created);
  }

  async update(user: Partial<UserEntity>): Promise<UserEntity> {
    if (!user.id) {
      throw new Error('User ID is required to update');
    }

    const updated = await this.prisma.user.update({
      where: { id: user.id },
      data: {
        username: user.username,
        email: user.email,
        password: user.password,
        token: user.token,
        updatedBy: user.updatedBy,
      },
    });

    return UserMapper.toEntity(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }
}
