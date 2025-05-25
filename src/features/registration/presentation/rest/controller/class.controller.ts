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
import { GetAllClassUsecase } from '../../../application/usecase/class/get-all-class.usecase';
import { CreateClassUsecase } from '../../../application/usecase/class/create-class.usecase';
import { GetClassUsecase } from '../../../application/usecase/class/get-class.usecase';
import { UpdateClassUsecase } from '../../../application/usecase/class/update-class.usecase';
import { DeleteClassUsecase } from '../../../application/usecase/class/delete-class.usecase';
import {
  CreateClassDto,
  CreateClassSchema,
} from '../dto-schema/class/create-class.schema';
import { ClassEntity } from '../../../domain/entities/class.entity';
import {
  UpdateClassDto,
  UpdateClassSchema,
} from '../dto-schema/class/update-class.schema';

@Controller(`${BASE_PATH}/class`)
export class ClassController {
  constructor(
    private readonly createClassUseCase: CreateClassUsecase,
    private readonly getAllClassUseCase: GetAllClassUsecase,
    private readonly getClassUseCase: GetClassUsecase,
    private readonly updateClassUseCase: UpdateClassUsecase,
    private readonly deleteClassUseCase: DeleteClassUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(new ValidationPipe(CreateClassSchema))
    req: CreateClassDto,
    @User() user: ClassEntity,
  ) {
    return this.createClassUseCase.execute({
      ...req,
      createdBy: user.id,
    });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllClassUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getClassUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(new ValidationPipe(UpdateClassSchema))
    req: UpdateClassDto,
    @User() user: ClassEntity,
  ) {
    return this.updateClassUseCase.execute({
      ...req,
      updatedBy: user.id,
    });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteClassUseCase.execute(id);
  }
}
