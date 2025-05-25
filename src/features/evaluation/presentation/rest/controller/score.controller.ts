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
import { GetAllScoreUsecase } from '../../../application/usecase/score/get-all-score.usecase';
import { CreateScoreUsecase } from '../../../application/usecase/score/create-score.usecase';
import { GetScoreUsecase } from '../../../application/usecase/score/get-score.usecase';
import { UpdateScoreUsecase } from '../../../application/usecase/score/update-score.usecase';
import { DeleteScoreUsecase } from '../../../application/usecase/score/delete-score.usecase';
import {
  CreateScoreDto,
  CreateScoreSchema,
} from '../dto-schema/score/create-score.schema';
import { ScoreEntity } from '../../../domain/entities/score.entity';
import {
  UpdateScoreDto,
  UpdateScoreSchema,
} from '../dto-schema/score/update-score.schema';

@Controller(`${BASE_PATH}/score`)
export class ScoreController {
  constructor(
    private readonly createScoreUseCase: CreateScoreUsecase,
    private readonly getAllScoreUseCase: GetAllScoreUsecase,
    private readonly getScoreUseCase: GetScoreUsecase,
    private readonly updateScoreUseCase: UpdateScoreUsecase,
    private readonly deleteScoreUseCase: DeleteScoreUsecase,
  ) {}

  @Post('/create')
  create(
    @Body(new ValidationPipe(CreateScoreSchema))
    req: CreateScoreDto,
    @User() user: ScoreEntity,
  ) {
    return this.createScoreUseCase.execute({
      ...req,
      createdBy: user.id,
    });
  }

  @Get('/getAll')
  getAll() {
    return this.getAllScoreUseCase.execute();
  }

  @Get('/get/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getScoreUseCase.execute(id);
  }

  @Patch('/update')
  update(
    @Body(new ValidationPipe(UpdateScoreSchema))
    req: UpdateScoreDto,
    @User() user: ScoreEntity,
  ) {
    return this.updateScoreUseCase.execute({
      ...req,
      updatedBy: user.id,
    });
  }

  @Delete('/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteScoreUseCase.execute(id);
  }
}
