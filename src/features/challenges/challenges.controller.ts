import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { getPath } from 'src/common/path';
import { ChallengesService } from 'src/features/challenges/challenges.service';
import {
  GetLikedChallengeResDto,
  MarkLikeChallengeReqDto,
} from 'src/features/challenges/dto';
import { Challenge } from 'src/features/challenges/entities';

@Controller({ path: getPath({ path: 'challenges', version: 1 }) })
export class ChallengesController {
  constructor(private readonly challengesService: ChallengesService) {}

  @Get('/')
  getChallenges(): Promise<Challenge[]> {
    return this.challengesService.getChallenges();
  }

  @Get('/liked-challenges/:userId')
  async getLikedChallenges(
    @Param('userId') userId: number,
  ): Promise<GetLikedChallengeResDto> {
    const likedChallenges = await this.challengesService.getLikedChallengesByUserId(
      userId,
    );

    return likedChallenges.map((likedChallenge) => ({
      id: likedChallenge.challengeId,
    }));
  }

  @Post('/liked-challenges')
  markLikeChallenge(
    @Body() { challengeId, userId }: MarkLikeChallengeReqDto,
  ): Promise<boolean> {
    return this.challengesService.markLikeChallenge(userId, challengeId);
  }
}
