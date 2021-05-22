import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChallengesController } from 'src/features/challenges/challenges.controller';
import { ChallengesService } from 'src/features/challenges/challenges.service';
import { ChallengesRepository } from 'src/features/challenges/repositories';

@Module({
  imports: [TypeOrmModule.forFeature([ChallengesRepository])],
  controllers: [ChallengesController],
  providers: [ChallengesService],
  exports: [ChallengesService, TypeOrmModule],
})
export class ChallengesModule {}
