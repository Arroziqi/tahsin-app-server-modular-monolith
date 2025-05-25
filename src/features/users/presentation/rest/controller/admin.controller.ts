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
import { GetAllAdminUsecase } from '../../../application/usecase/admin/get-all-admin.usecase';
import { CreateAdminUsecase } from '../../../application/usecase/admin/create-admin.usecase';
import { GetAdminUsecase } from '../../../application/usecase/admin/get-admin.usecase';
import { UpdateAdminUsecase } from '../../../application/usecase/admin/update-admin.usecase';
import { DeleteAdminUsecase } from '../../../application/usecase/admin/delete-admin.usecase';
import { CreateAdminPipe } from '../pipe/admin/createAdmin.pipe';
import { CreateAdminDto } from '../dto/admin/createAdmin.dto';
import { AdminEntity } from '../../../domain/entities/admin.entity';
import { UpdateAdminPipe } from '../pipe/admin/updateAdmin.pipe';
import { UpdateAdminDto } from '../dto/admin/updateAdmin.dto';

@Controller(`${BASE_PATH}/admin`)
export class AdminController {
  constructor(
    private readonly createAdminUseCase: CreateAdminUsecase,
    private readonly getAllAdminUseCase: GetAllAdminUsecase,
    private readonly getAdminUseCase: GetAdminUsecase,
    private readonly updateAdminUseCase: UpdateAdminUsecase,
    private readonly deleteAdminUseCase: DeleteAdminUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(CreateAdminPipe) req: CreateAdminDto,
    @User() user: AdminEntity,
  ) {
    return this.createAdminUseCase.execute({ ...req, createdBy: user.id });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllAdminUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getAdminUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(UpdateAdminPipe) req: UpdateAdminDto,
    @User() user: AdminEntity,
  ) {
    return this.updateAdminUseCase.execute({ ...req, updatedBy: user.id });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteAdminUseCase.execute(id);
  }
}
