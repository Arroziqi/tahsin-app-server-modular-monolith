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
import { CreateTransactionTypeUsecase } from '../../../application/usecase/transaction-type/create-transaction-type.usecase';
import { GetAllTransactionTypeUsecase } from '../../../application/usecase/transaction-type/get-all-transaction-type.usecase';
import { GetTransactionTypeUsecase } from '../../../application/usecase/transaction-type/get-transaction-type.usecase';
import { UpdateTransactionTypeUsecase } from '../../../application/usecase/transaction-type/update-transaction-type.usecase';
import { DeleteTransactionTypeUsecase } from '../../../application/usecase/transaction-type/delete-transaction-type.usecase';
import {
  CreateTransactionTypeDto,
  CreateTransactionTypeSchema,
} from '../dto-schema/transaction-type/create-transaction-type.schema';
import { TransactionTypeEntity } from '../../../domain/entities/transaction-type.entity';
import {
  UpdateTransactionTypeDto,
  UpdateTransactionTypeSchema,
} from '../dto-schema/transaction-type/update-transaction-type.schema';

@Controller(`${BASE_PATH}/transactionType`)
export class TransactionTypeController {
  constructor(
    private readonly createTransactionTypeUseCase: CreateTransactionTypeUsecase,
    private readonly getAllTransactionTypeUseCase: GetAllTransactionTypeUsecase,
    private readonly getTransactionTypeUseCase: GetTransactionTypeUsecase,
    private readonly updateTransactionTypeUseCase: UpdateTransactionTypeUsecase,
    private readonly deleteTransactionTypeUseCase: DeleteTransactionTypeUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(new ValidationPipe(CreateTransactionTypeSchema))
    req: CreateTransactionTypeDto,
    @User() user: TransactionTypeEntity,
  ) {
    return this.createTransactionTypeUseCase.execute({
      ...req,
      createdBy: user.id,
    });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllTransactionTypeUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getTransactionTypeUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(new ValidationPipe(UpdateTransactionTypeSchema))
    req: UpdateTransactionTypeDto,
    @User() user: TransactionTypeEntity,
  ) {
    return this.updateTransactionTypeUseCase.execute({
      ...req,
      updatedBy: user.id,
    });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteTransactionTypeUseCase.execute(id);
  }
}
