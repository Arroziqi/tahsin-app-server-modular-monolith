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
import { GetAllModuleUsecase } from '../../../application/usecase/module/get-all-module.usecase';
import { CreateModuleUsecase } from '../../../application/usecase/module/create-module.usecase';
import { GetModuleUsecase } from '../../../application/usecase/module/get-module.usecase';
import { UpdateModuleUsecase } from '../../../application/usecase/module/update-module.usecase';
import { DeleteModuleUsecase } from '../../../application/usecase/module/delete-module.usecase';
import {
  CreateModuleDto,
  CreateModuleSchema,
} from '../dto-schema/module/create-module.schema';
import { ModuleEntity } from '../../../domain/entities/module.entity';
import {
  UpdateModuleDto,
  UpdateModuleSchema,
} from '../dto-schema/module/update-module.schema';

@Controller(`${BASE_PATH}/module`)
export class ModuleController {
  constructor(
    private readonly createModuleUseCase: CreateModuleUsecase,
    private readonly getAllModuleUseCase: GetAllModuleUsecase,
    private readonly getModuleUseCase: GetModuleUsecase,
    private readonly updateModuleUseCase: UpdateModuleUsecase,
    private readonly deleteModuleUseCase: DeleteModuleUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(new ValidationPipe(CreateModuleSchema))
    req: CreateModuleDto,
    @User() user: ModuleEntity,
  ) {
    return this.createModuleUseCase.execute({
      ...req,
      createdBy: user.id,
    });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllModuleUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getModuleUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(new ValidationPipe(UpdateModuleSchema))
    req: UpdateModuleDto,
    @User() user: ModuleEntity,
  ) {
    return this.updateModuleUseCase.execute({
      ...req,
      updatedBy: user.id,
    });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteModuleUseCase.execute(id);
  }
}
