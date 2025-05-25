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
import { CreateTransactionStatusUsecase } from '../../../application/usecase/transaction-status/create-transaction-status.usecase';
import { GetAllTransactionStatusUsecase } from '../../../application/usecase/transaction-status/get-all-transaction-status.usecase';
import { GetTransactionStatusUsecase } from '../../../application/usecase/transaction-status/get-transaction-status.usecase';
import { UpdateTransactionStatusUsecase } from '../../../application/usecase/transaction-status/update-transaction-status.usecase';
import { DeleteTransactionStatusUsecase } from '../../../application/usecase/transaction-status/delete-transaction-status.usecase';
import {
  CreateTransactionStatusDto,
  CreateTransactionStatusSchema,
} from '../dto-schema/transaction-status/create-transaction-status.schema';
import { TransactionStatusEntity } from '../../../domain/entities/transaction-status.entity';
import {
  UpdateTransactionStatusDto,
  UpdateTransactionStatusSchema,
} from '../dto-schema/transaction-status/update-transaction-status.schema';

@Controller(`${BASE_PATH}/transactionStatus`)
export class TransactionStatusController {
  constructor(
    private readonly createTransactionStatusUseCase: CreateTransactionStatusUsecase,
    private readonly getAllTransactionStatusUseCase: GetAllTransactionStatusUsecase,
    private readonly getTransactionStatusUseCase: GetTransactionStatusUsecase,
    private readonly updateTransactionStatusUseCase: UpdateTransactionStatusUsecase,
    private readonly deleteTransactionStatusUseCase: DeleteTransactionStatusUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(new ValidationPipe(CreateTransactionStatusSchema))
    req: CreateTransactionStatusDto,
    @User() user: TransactionStatusEntity,
  ) {
    return this.createTransactionStatusUseCase.execute({
      ...req,
      createdBy: user.id,
    });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllTransactionStatusUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getTransactionStatusUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(new ValidationPipe(UpdateTransactionStatusSchema))
    req: UpdateTransactionStatusDto,
    @User() user: TransactionStatusEntity,
  ) {
    return this.updateTransactionStatusUseCase.execute({
      ...req,
      updatedBy: user.id,
    });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteTransactionStatusUseCase.execute(id);
  }
}
