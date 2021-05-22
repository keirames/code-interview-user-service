import { Controller, Get } from '@nestjs/common';
import { getPath } from 'src/common/path';
import { ChallengesService } from 'src/features/challenges/challenges.service';
import { Challenge } from 'src/features/challenges/entities';

@Controller({ path: getPath({ path: 'challenges', version: 1 }) })
export class ChallengesController {
  constructor(private readonly challengesService: ChallengesService) {}

  @Get('/')
  getChallenges(): Promise<Challenge[]> {
    return this.challengesService.findAllChallenges();
  }
}
