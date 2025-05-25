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
import { CreateScheduleUsecase } from '../../../application/usecase/schedule/create-schedule.usecase';
import { GetAllScheduleUsecase } from '../../../application/usecase/schedule/get-all-schedule.usecase';
import { GetScheduleUsecase } from '../../../application/usecase/schedule/get-schedule.usecase';
import { UpdateScheduleUsecase } from '../../../application/usecase/schedule/update-schedule.usecase';
import { DeleteScheduleUsecase } from '../../../application/usecase/schedule/delete-schedule.usecase';
import {
  CreateScheduleDto,
  CreateScheduleSchema,
} from '../dto-schema/schedule/create-schedule.schema';
import { ScheduleEntity } from '../../../domain/entities/schedule.entity';
import {
  UpdateScheduleDto,
  UpdateScheduleSchema,
} from '../dto-schema/schedule/update-schedule.schema';

@Controller(`${BASE_PATH}/schedule`)
export class ScheduleController {
  constructor(
    private readonly createScheduleUseCase: CreateScheduleUsecase,
    private readonly getAllScheduleUseCase: GetAllScheduleUsecase,
    private readonly getScheduleUseCase: GetScheduleUsecase,
    private readonly updateScheduleUseCase: UpdateScheduleUsecase,
    private readonly deleteScheduleUseCase: DeleteScheduleUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(new ValidationPipe(CreateScheduleSchema))
    req: CreateScheduleDto,
    @User() user: ScheduleEntity,
  ) {
    return this.createScheduleUseCase.execute({
      ...req,
      createdBy: user.id,
    });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllScheduleUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getScheduleUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(new ValidationPipe(UpdateScheduleSchema))
    req: UpdateScheduleDto,
    @User() user: ScheduleEntity,
  ) {
    return this.updateScheduleUseCase.execute({
      ...req,
      updatedBy: user.id,
    });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteScheduleUseCase.execute(id);
  }
}
