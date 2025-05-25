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
import { CreateBatchUsecase } from '../../../application/usecase/batch/create-batch.usecase';
import { GetAllBatchUsecase } from '../../../application/usecase/batch/get-all-batch.usecase';
import { GetBatchUsecase } from '../../../application/usecase/batch/get-batch.usecase';
import { UpdateBatchUsecase } from '../../../application/usecase/batch/update-batch.usecase';
import { DeleteBatchUsecase } from '../../../application/usecase/batch/delete-batch.usecase';
import {
  CreateBatchDto,
  CreateBatchSchema,
} from '../dto-schema/batch/create-batch.schema';
import { BatchEntity } from '../../../domain/entities/batch.entity';
import {
  UpdateBatchDto,
  UpdateBatchSchema,
} from '../dto-schema/batch/update-batch.schema';

@Controller(`${BASE_PATH}/batch`)
export class BatchController {
  constructor(
    private readonly createBatchUseCase: CreateBatchUsecase,
    private readonly getAllBatchUseCase: GetAllBatchUsecase,
    private readonly getBatchUseCase: GetBatchUsecase,
    private readonly updateBatchUseCase: UpdateBatchUsecase,
    private readonly deleteBatchUseCase: DeleteBatchUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(new ValidationPipe(CreateBatchSchema))
    req: CreateBatchDto,
    @User() user: BatchEntity,
  ) {
    return this.createBatchUseCase.execute({
      ...req,
      createdBy: user.id,
    });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllBatchUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getBatchUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(new ValidationPipe(UpdateBatchSchema))
    req: UpdateBatchDto,
    @User() user: BatchEntity,
  ) {
    return this.updateBatchUseCase.execute({
      ...req,
      updatedBy: user.id,
    });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteBatchUseCase.execute(id);
  }
}
