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
import { ComponentEntity } from '../../../domain/entities/component.entity';
import {
  UpdateComponentDto,
  UpdateComponentSchema,
} from '../dto-schema/component/update-component.schema';
import { CreateComponentUsecase } from '../../../application/usecase/component/create-component.usecase';
import { GetAllComponentUsecase } from '../../../application/usecase/component/get-all-component.usecase';
import { GetComponentUsecase } from '../../../application/usecase/component/get-component.usecase';
import { UpdateComponentUsecase } from '../../../application/usecase/component/update-component.usecase';
import { DeleteComponentUsecase } from '../../../application/usecase/component/delete-component.usecase';
import {
  CreateComponentDto,
  CreateComponentSchema,
} from '../dto-schema/component/create-component.schema';

@Controller(`${BASE_PATH}/component`)
export class ComponentController {
  constructor(
    private readonly createComponentUseCase: CreateComponentUsecase,
    private readonly getAllComponentUseCase: GetAllComponentUsecase,
    private readonly getComponentUseCase: GetComponentUsecase,
    private readonly updateComponentUseCase: UpdateComponentUsecase,
    private readonly deleteComponentUseCase: DeleteComponentUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(new ValidationPipe(CreateComponentSchema))
    req: CreateComponentDto,
    @User() user: ComponentEntity,
  ) {
    return this.createComponentUseCase.execute({
      ...req,
      createdBy: user.id,
    });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllComponentUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getComponentUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(new ValidationPipe(UpdateComponentSchema))
    req: UpdateComponentDto,
    @User() user: ComponentEntity,
  ) {
    return this.updateComponentUseCase.execute({
      ...req,
      updatedBy: user.id,
    });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteComponentUseCase.execute(id);
  }
}
