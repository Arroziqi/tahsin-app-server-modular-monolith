import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { BASE_PATH } from '../../../../../common/constants/cons';
import { User } from '../../../../../common/decorators/user.decorator';
import { ValidationPipe } from '../../../../../common/pipes/validation.pipe';
import { CreateLevelUsecase } from '../../../application/usecase/level/create-level.usecase';
import { GetAllLevelUsecase } from '../../../application/usecase/level/get-all-level.usecase';
import { GetLevelUsecase } from '../../../application/usecase/level/get-level.usecase';
import { UpdateLevelUsecase } from '../../../application/usecase/level/update-level.usecase';
import { DeleteLevelUsecase } from '../../../application/usecase/level/delete-level.usecase';
import {
  CreateLevelDto,
  CreateLevelSchema,
} from '../dto-schema/level/create-level.schema';
import { LevelEntity } from '../../../domain/entities/level.entity';
import {
  UpdateLevelDto,
  UpdateLevelSchema,
} from '../dto-schema/level/update-level.schema';

@Controller(`${BASE_PATH}/level`)
export class LevelController {
  constructor(
    private readonly createLevelUseCase: CreateLevelUsecase,
    private readonly getAllLevelUseCase: GetAllLevelUsecase,
    private readonly getLevelUseCase: GetLevelUsecase,
    private readonly updateLevelUseCase: UpdateLevelUsecase,
    private readonly deleteLevelUseCase: DeleteLevelUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(new ValidationPipe(CreateLevelSchema))
    req: CreateLevelDto,
    @User() user: LevelEntity,
  ) {
    return this.createLevelUseCase.execute({
      ...req,
      createdBy: user.id,
    });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllLevelUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getLevelUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(new ValidationPipe(UpdateLevelSchema))
    req: UpdateLevelDto,
    @User() user: LevelEntity,
  ) {
    return this.updateLevelUseCase.execute({
      ...req,
      updatedBy: user.id,
    });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteLevelUseCase.execute(id);
  }
}
