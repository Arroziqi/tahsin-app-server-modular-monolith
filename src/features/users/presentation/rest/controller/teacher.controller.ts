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
import { UpdateTeacherPipe } from '../pipe/student/updateTeacher.pipe';
import { UpdateTeacherDto } from '../dto/teacher/updateTeacher.dto';
import { TeacherEntity } from '../../../domain/entities/teacher.entity';
import { CreateTeacherUsecase } from '../../../application/usecase/teacher/create-teacher.usecase';
import { GetAllTeacherUsecase } from '../../../application/usecase/teacher/get-all-teacher.usecase';
import { GetTeacherUsecase } from '../../../application/usecase/teacher/get-teacher.usecase';
import { UpdateTeacherUsecase } from '../../../application/usecase/teacher/update-teacher.usecase';
import { DeleteTeacherUsecase } from '../../../application/usecase/teacher/delete-teacher.usecase';
import { CreateTeacherPipe } from '../pipe/student/createTeacher.pipe';
import { CreateTeacherDto } from '../dto/teacher/createTeacher.dto';

@Controller(`${BASE_PATH}/teacher`)
export class TeacherController {
  constructor(
    private readonly createTeacherUseCase: CreateTeacherUsecase,
    private readonly getAllTeacherUseCase: GetAllTeacherUsecase,
    private readonly getTeacherUseCase: GetTeacherUsecase,
    private readonly updateTeacherUseCase: UpdateTeacherUsecase,
    private readonly deleteTeacherUseCase: DeleteTeacherUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(CreateTeacherPipe) req: CreateTeacherDto,
    @User() user: TeacherEntity,
  ) {
    return this.createTeacherUseCase.execute({ ...req, createdBy: user.id });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllTeacherUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getTeacherUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(UpdateTeacherPipe) req: UpdateTeacherDto,
    @User() user: TeacherEntity,
  ) {
    return this.updateTeacherUseCase.execute({ ...req, updatedBy: user.id });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteTeacherUseCase.execute(id);
  }
}
