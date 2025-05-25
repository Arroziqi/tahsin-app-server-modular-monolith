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
import { DeleteBillUsecase } from '../../../application/usecase/bill/delete-bill.usecase';
import { CreateBillUsecase } from '../../../application/usecase/bill/create-bill.usecase';
import { GetAllBillUsecase } from '../../../application/usecase/bill/get-all-bill.usecase';
import { GetBillUsecase } from '../../../application/usecase/bill/get-bill.usecase';
import { UpdateBillUsecase } from '../../../application/usecase/bill/update-bill.usecase';
import {
  CreateBillDto,
  CreateBillSchema,
} from '../dto-schema/bill/create-bill.schema';
import { BillEntity } from '../../../domain/entities/bill.entity';
import {
  UpdateBillDto,
  UpdateBillSchema,
} from '../dto-schema/bill/update-bill.schema';

@Controller(`${BASE_PATH}/bill`)
export class BillController {
  constructor(
    private readonly createBillUseCase: CreateBillUsecase,
    private readonly getAllBillUseCase: GetAllBillUsecase,
    private readonly getBillUseCase: GetBillUsecase,
    private readonly updateBillUseCase: UpdateBillUsecase,
    private readonly deleteBillUseCase: DeleteBillUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(new ValidationPipe(CreateBillSchema))
    req: CreateBillDto,
    @User() user: BillEntity,
  ) {
    return this.createBillUseCase.execute({
      ...req,
      createdBy: user.id,
    });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllBillUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getBillUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(new ValidationPipe(UpdateBillSchema))
    req: UpdateBillDto,
    @User() user: BillEntity,
  ) {
    return this.updateBillUseCase.execute({
      ...req,
      updatedBy: user.id,
    });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteBillUseCase.execute(id);
  }
}
