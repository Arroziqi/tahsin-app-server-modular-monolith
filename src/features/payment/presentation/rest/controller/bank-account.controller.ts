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
import { GetAllBankAccountUsecase } from '../../../application/usecase/bank-account/get-all-bank-account.usecase';
import { CreateBankAccountUsecase } from '../../../application/usecase/bank-account/create-bank-account.usecase';
import { GetBankAccountUsecase } from '../../../application/usecase/bank-account/get-bank-account.usecase';
import { UpdateBankAccountUsecase } from '../../../application/usecase/bank-account/update-bank-account.usecase';
import { DeleteBankAccountUsecase } from '../../../application/usecase/bank-account/delete-bank-account.usecase';
import {
  CreateBankAccountDto,
  CreateBankAccountSchema,
} from '../dto-schema/bank-account/create-bank-account.schema';
import { BankAccountEntity } from '../../../domain/entities/bank-account.entity';
import {
  UpdateBankAccountDto,
  UpdateBankAccountSchema,
} from '../dto-schema/bank-account/update-bank-account.schema';

@Controller(`${BASE_PATH}/bankAccount`)
export class BankAccountController {
  constructor(
    private readonly createBankAccountUseCase: CreateBankAccountUsecase,
    private readonly getAllBankAccountUseCase: GetAllBankAccountUsecase,
    private readonly getBankAccountUseCase: GetBankAccountUsecase,
    private readonly updateBankAccountUseCase: UpdateBankAccountUsecase,
    private readonly deleteBankAccountUseCase: DeleteBankAccountUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(new ValidationPipe(CreateBankAccountSchema))
    req: CreateBankAccountDto,
    @User() user: BankAccountEntity,
  ) {
    return this.createBankAccountUseCase.execute({
      ...req,
      createdBy: user.id,
    });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllBankAccountUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getBankAccountUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(new ValidationPipe(UpdateBankAccountSchema))
    req: UpdateBankAccountDto,
    @User() user: BankAccountEntity,
  ) {
    return this.updateBankAccountUseCase.execute({
      ...req,
      updatedBy: user.id,
    });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteBankAccountUseCase.execute(id);
  }
}
