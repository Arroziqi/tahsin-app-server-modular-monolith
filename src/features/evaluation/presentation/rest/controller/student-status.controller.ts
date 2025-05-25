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
import { CreateStudentStatusUsecase } from '../../../application/usecase/student-status/create-student-status.usecase';
import { GetAllStudentStatusUsecase } from '../../../application/usecase/student-status/get-all-student-status.usecase';
import { GetStudentStatusUsecase } from '../../../application/usecase/student-status/get-student-status.usecase';
import { UpdateStudentStatusUsecase } from '../../../application/usecase/student-status/update-student-status.usecase';
import { DeleteStudentStatusUsecase } from '../../../application/usecase/student-status/delete-student-status.usecase';
import {
  CreateStudentStatusDto,
  CreateStudentStatusSchema,
} from '../dto-schema/student-status/create-student-status.schema';
import { StudentStatusEntity } from '../../../domain/entities/student-status.entity';
import {
  UpdateStudentStatusDto,
  UpdateStudentStatusSchema,
} from '../dto-schema/student-status/update-student-status.schema';

@Controller(`${BASE_PATH}/studentStatus`)
export class StudentStatusController {
  constructor(
    private readonly createStudentStatusUseCase: CreateStudentStatusUsecase,
    private readonly getAllStudentStatusUseCase: GetAllStudentStatusUsecase,
    private readonly getStudentStatusUseCase: GetStudentStatusUsecase,
    private readonly updateStudentStatusUseCase: UpdateStudentStatusUsecase,
    private readonly deleteStudentStatusUseCase: DeleteStudentStatusUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(new ValidationPipe(CreateStudentStatusSchema))
    req: CreateStudentStatusDto,
    @User() user: StudentStatusEntity,
  ) {
    return this.createStudentStatusUseCase.execute({
      ...req,
      createdBy: user.id,
    });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllStudentStatusUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getStudentStatusUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(new ValidationPipe(UpdateStudentStatusSchema))
    req: UpdateStudentStatusDto,
    @User() user: StudentStatusEntity,
  ) {
    return this.updateStudentStatusUseCase.execute({
      ...req,
      updatedBy: user.id,
    });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteStudentStatusUseCase.execute(id);
  }
}
