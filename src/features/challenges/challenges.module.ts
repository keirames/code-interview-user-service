import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChallengesController } from 'src/features/challenges/challenges.controller';
import { ChallengesService } from 'src/features/challenges/challenges.service';
import {
  ChallengesRepository,
  LikedChallengesRepository,
} from 'src/features/challenges/repositories';
import { UsersModule } from 'src/features/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChallengesRepository, LikedChallengesRepository]),
    UsersModule,
  ],
  controllers: [ChallengesController],
  providers: [ChallengesService],
  exports: [ChallengesService, TypeOrmModule],
})
export class ChallengesModule {}
