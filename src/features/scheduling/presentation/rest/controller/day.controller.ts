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
import { CreateDayUsecase } from '../../../application/usecase/day/create-day.usecase';
import { GetAllDayUsecase } from '../../../application/usecase/day/get-all-day.usecase';
import { GetDayUsecase } from '../../../application/usecase/day/get-day.usecase';
import { UpdateDayUsecase } from '../../../application/usecase/day/update-day.usecase';
import { DeleteDayUsecase } from '../../../application/usecase/day/delete-day.usecase';
import {
  CreateDayDto,
  CreateDaySchema,
} from '../dto-schema/day/create-day.schema';
import { DayEntity } from '../../../domain/entities/day.entity';
import {
  UpdateDayDto,
  UpdateDaySchema,
} from '../dto-schema/day/update-day.schema';

@Controller(`${BASE_PATH}/day`)
export class DayController {
  constructor(
    private readonly createDayUseCase: CreateDayUsecase,
    private readonly getAllDayUseCase: GetAllDayUsecase,
    private readonly getDayUseCase: GetDayUsecase,
    private readonly updateDayUseCase: UpdateDayUsecase,
    private readonly deleteDayUseCase: DeleteDayUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(new ValidationPipe(CreateDaySchema))
    req: CreateDayDto,
    @User() user: DayEntity,
  ) {
    return this.createDayUseCase.execute({
      ...req,
      createdBy: user.id,
    });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllDayUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getDayUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(new ValidationPipe(UpdateDaySchema))
    req: UpdateDayDto,
    @User() user: DayEntity,
  ) {
    return this.updateDayUseCase.execute({
      ...req,
      updatedBy: user.id,
    });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteDayUseCase.execute(id);
  }
}
