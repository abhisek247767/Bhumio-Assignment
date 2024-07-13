import { Module } from '@nestjs/common';
import { TrainService } from './train.service';
import { TrainController } from './train.controller';

@Module({
  imports: [TrainModule],
  providers: [TrainService],
  controllers: [TrainController]
})
export class TrainModule {}
