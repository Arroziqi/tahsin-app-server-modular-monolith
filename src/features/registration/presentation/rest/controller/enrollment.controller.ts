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
import { GetAllEnrollmentUsecase } from '../../../application/usecase/enrollment/get-all-enrollment.usecase';
import { CreateEnrollmentUsecase } from '../../../application/usecase/enrollment/create-enrollment.usecase';
import { GetEnrollmentUsecase } from '../../../application/usecase/enrollment/get-enrollment.usecase';
import { UpdateEnrollmentUsecase } from '../../../application/usecase/enrollment/update-enrollment.usecase';
import { DeleteEnrollmentUsecase } from '../../../application/usecase/enrollment/delete-enrollment.usecase';
import {
  CreateEnrollmentDto,
  CreateEnrollmentSchema,
} from '../dto-schema/enrollment/create-enrollment.schema';
import { EnrollmentEntity } from '../../../domain/entities/enrollment.entity';
import {
  UpdateEnrollmentDto,
  UpdateEnrollmentSchema,
} from '../dto-schema/enrollment/update-enrollment.schema';

@Controller(`${BASE_PATH}/enrollment`)
export class EnrollmentController {
  constructor(
    private readonly createEnrollmentUseCase: CreateEnrollmentUsecase,
    private readonly getAllEnrollmentUseCase: GetAllEnrollmentUsecase,
    private readonly getEnrollmentUseCase: GetEnrollmentUsecase,
    private readonly updateEnrollmentUseCase: UpdateEnrollmentUsecase,
    private readonly deleteEnrollmentUseCase: DeleteEnrollmentUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(new ValidationPipe(CreateEnrollmentSchema))
    req: CreateEnrollmentDto,
    @User() user: EnrollmentEntity,
  ) {
    return this.createEnrollmentUseCase.execute({
      ...req,
      createdBy: user.id,
    });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllEnrollmentUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getEnrollmentUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(new ValidationPipe(UpdateEnrollmentSchema))
    req: UpdateEnrollmentDto,
    @User() user: EnrollmentEntity,
  ) {
    return this.updateEnrollmentUseCase.execute({
      ...req,
      updatedBy: user.id,
    });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteEnrollmentUseCase.execute(id);
  }
}
