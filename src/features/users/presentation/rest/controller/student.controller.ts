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
import { StudentEntity } from '../../../domain/entities/student.entity';
import { CreateStudentUsecase } from '../../../application/usecase/student/create-student.usecase';
import { GetAllStudentUsecase } from '../../../application/usecase/student/get-all-student.usecase';
import { GetStudentUsecase } from '../../../application/usecase/student/get-student.usecase';
import { UpdateStudentUsecase } from '../../../application/usecase/student/update-student.usecase';
import { DeleteStudentUsecase } from '../../../application/usecase/student/delete-student.usecase';
import { CreateStudentPipe } from '../pipe/teacher/createStudent.pipe';
import { CreateStudentDto } from '../dto/student/createStudent.dto';
import { UpdateStudentPipe } from '../pipe/teacher/updateStudent.pipe';
import { UpdateStudentDto } from '../dto/student/updateStudent.dto';

@Controller(`${BASE_PATH}/student`)
export class StudentController {
  constructor(
    private readonly createStudentUseCase: CreateStudentUsecase,
    private readonly getAllStudentUseCase: GetAllStudentUsecase,
    private readonly getStudentUseCase: GetStudentUsecase,
    private readonly updateStudentUseCase: UpdateStudentUsecase,
    private readonly deleteStudentUseCase: DeleteStudentUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(CreateStudentPipe) req: CreateStudentDto,
    @User() user: StudentEntity,
  ) {
    return this.createStudentUseCase.execute({ ...req, createdBy: user.id });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllStudentUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getStudentUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(UpdateStudentPipe) req: UpdateStudentDto,
    @User() user: StudentEntity,
  ) {
    return this.updateStudentUseCase.execute({ ...req, updatedBy: user.id });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteStudentUseCase.execute(id);
  }
}
