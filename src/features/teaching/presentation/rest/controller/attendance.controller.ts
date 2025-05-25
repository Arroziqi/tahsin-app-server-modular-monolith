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
import { CreateAttendanceUsecase } from '../../../application/usecase/attendance/create-attendance.usecase';
import { GetAllAttendanceUsecase } from '../../../application/usecase/attendance/get-all-attendance.usecase';
import { GetAttendanceUsecase } from '../../../application/usecase/attendance/get-attendance.usecase';
import { UpdateAttendanceUsecase } from '../../../application/usecase/attendance/update-attendance.usecase';
import { DeleteAttendanceUsecase } from '../../../application/usecase/attendance/delete-attendance.usecase';
import {
  CreateAttendanceDto,
  CreateAttendanceSchema,
} from '../dto-schema/attendance/create-attendance.schema';
import { AttendanceEntity } from '../../../domain/entities/attendance.entity';
import {
  UpdateAttendanceDto,
  UpdateAttendanceSchema,
} from '../dto-schema/attendance/update-attendance.schema';

@Controller(`${BASE_PATH}/attendance`)
export class AttendanceController {
  constructor(
    private readonly createAttendanceUseCase: CreateAttendanceUsecase,
    private readonly getAllAttendanceUseCase: GetAllAttendanceUsecase,
    private readonly getAttendanceUseCase: GetAttendanceUsecase,
    private readonly updateAttendanceUseCase: UpdateAttendanceUsecase,
    private readonly deleteAttendanceUseCase: DeleteAttendanceUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(new ValidationPipe(CreateAttendanceSchema))
    req: CreateAttendanceDto,
    @User() user: AttendanceEntity,
  ) {
    return this.createAttendanceUseCase.execute({
      ...req,
      createdBy: user.id,
    });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllAttendanceUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getAttendanceUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(new ValidationPipe(UpdateAttendanceSchema))
    req: UpdateAttendanceDto,
    @User() user: AttendanceEntity,
  ) {
    return this.updateAttendanceUseCase.execute({
      ...req,
      updatedBy: user.id,
    });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteAttendanceUseCase.execute(id);
  }
}
