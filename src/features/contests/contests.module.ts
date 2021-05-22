import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContestsController } from 'src/features/contests/contests.controller';
import { ContestsRepository } from 'src/features/contests/repositories';
import { ContestsService } from './contests.service';

@Module({
  imports: [TypeOrmModule.forFeature([ContestsRepository])],
  controllers: [ContestsController],
  providers: [ContestsService],
  exports: [ContestsService],
})
export class ContestsModule {}
