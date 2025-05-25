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
import { CreateTransactionUsecase } from '../../../application/usecase/transaction/create-transaction.usecase';
import { GetAllTransactionUsecase } from '../../../application/usecase/transaction/get-all-transaction.usecase';
import { GetTransactionUsecase } from '../../../application/usecase/transaction/get-transaction.usecase';
import { UpdateTransactionUsecase } from '../../../application/usecase/transaction/update-transaction.usecase';
import { DeleteTransactionUsecase } from '../../../application/usecase/transaction/delete-transaction.usecase';
import { ValidationPipe } from '../../../../../common/pipes/validation.pipe';
import {
  CreateTransactionDto,
  CreateTransactionSchema,
} from '../dto-schema/transaction/create-transaction.schema';
import { TransactionEntity } from '../../../domain/entities/transaction.entity';
import {
  UpdateTransactionDto,
  UpdateTransactionSchema,
} from '../dto-schema/transaction/update-transaction.schema';

@Controller(`${BASE_PATH}/transaction`)
export class TransactionController {
  constructor(
    private readonly createTransactionUseCase: CreateTransactionUsecase,
    private readonly getAllTransactionUseCase: GetAllTransactionUsecase,
    private readonly getTransactionUseCase: GetTransactionUsecase,
    private readonly updateTransactionUseCase: UpdateTransactionUsecase,
    private readonly deleteTransactionUseCase: DeleteTransactionUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(new ValidationPipe(CreateTransactionSchema))
    req: CreateTransactionDto,
    @User() user: TransactionEntity,
  ) {
    return this.createTransactionUseCase.execute({
      ...req,
      createdBy: user.id,
    });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllTransactionUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getTransactionUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(new ValidationPipe(UpdateTransactionSchema))
    req: UpdateTransactionDto,
    @User() user: TransactionEntity,
  ) {
    return this.updateTransactionUseCase.execute({
      ...req,
      updatedBy: user.id,
    });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteTransactionUseCase.execute(id);
  }
}
