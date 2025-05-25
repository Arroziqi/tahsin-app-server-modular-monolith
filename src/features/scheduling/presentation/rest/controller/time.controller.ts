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
import { CreateTimeUsecase } from '../../../application/usecase/time/create-time.usecase';
import { GetAllTimeUsecase } from '../../../application/usecase/time/get-all-time.usecase';
import { GetTimeUsecase } from '../../../application/usecase/time/get-time.usecase';
import { UpdateTimeUsecase } from '../../../application/usecase/time/update-time.usecase';
import { DeleteTimeUsecase } from '../../../application/usecase/time/delete-time.usecase';
import {
  CreateTimeDto,
  CreateTimeSchema,
} from '../dto-schema/time/create-time.schema';
import { TimeEntity } from '../../../domain/entities/time.entity';
import {
  UpdateTimeDto,
  UpdateTimeSchema,
} from '../dto-schema/time/update-time.schema';

@Controller(`${BASE_PATH}/time`)
export class TimeController {
  constructor(
    private readonly createTimeUseCase: CreateTimeUsecase,
    private readonly getAllTimeUseCase: GetAllTimeUsecase,
    private readonly getTimeUseCase: GetTimeUsecase,
    private readonly updateTimeUseCase: UpdateTimeUsecase,
    private readonly deleteTimeUseCase: DeleteTimeUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(new ValidationPipe(CreateTimeSchema))
    req: CreateTimeDto,
    @User() user: TimeEntity,
  ) {
    return this.createTimeUseCase.execute({
      ...req,
      createdBy: user.id,
    });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllTimeUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getTimeUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(new ValidationPipe(UpdateTimeSchema))
    req: UpdateTimeDto,
    @User() user: TimeEntity,
  ) {
    return this.updateTimeUseCase.execute({
      ...req,
      updatedBy: user.id,
    });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteTimeUseCase.execute(id);
  }
}
