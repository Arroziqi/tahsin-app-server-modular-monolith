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
import { CreateClassPriceUsecase } from '../../../application/usecase/class-price/create-class-price.usecase';
import { GetAllClassPriceUsecase } from '../../../application/usecase/class-price/get-all-class-price.usecase';
import { GetClassPriceUsecase } from '../../../application/usecase/class-price/get-class-price.usecase';
import { UpdateClassPriceUsecase } from '../../../application/usecase/class-price/update-class-price.usecase';
import { DeleteClassPriceUsecase } from '../../../application/usecase/class-price/delete-class-price.usecase';
import {
  CreateClassPriceDto,
  CreateClassPriceSchema,
} from '../dto-schema/class-price/create-class-price.schema';
import { ClassPriceEntity } from '../../../domain/entities/class-price.entity';
import {
  UpdateClassPriceDto,
  UpdateClassPriceSchema,
} from '../dto-schema/class-price/update-class-price.schema';

@Controller(`${BASE_PATH}/classPrice`)
export class ClassPriceController {
  constructor(
    private readonly createClassPriceUseCase: CreateClassPriceUsecase,
    private readonly getAllClassPriceUseCase: GetAllClassPriceUsecase,
    private readonly getClassPriceUseCase: GetClassPriceUsecase,
    private readonly updateClassPriceUseCase: UpdateClassPriceUsecase,
    private readonly deleteClassPriceUseCase: DeleteClassPriceUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(new ValidationPipe(CreateClassPriceSchema))
    req: CreateClassPriceDto,
    @User() user: ClassPriceEntity,
  ) {
    return this.createClassPriceUseCase.execute({
      ...req,
      createdBy: user.id,
    });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllClassPriceUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getClassPriceUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(new ValidationPipe(UpdateClassPriceSchema))
    req: UpdateClassPriceDto,
    @User() user: ClassPriceEntity,
  ) {
    return this.updateClassPriceUseCase.execute({
      ...req,
      updatedBy: user.id,
    });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteClassPriceUseCase.execute(id);
  }
}
