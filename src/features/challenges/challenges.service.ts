import { BadRequestException, Injectable } from '@nestjs/common';
import { Challenge, LikedChallenge } from 'src/features/challenges/entities';
import {
  ChallengesRepository,
  LikedChallengesRepository,
} from 'src/features/challenges/repositories';
import { UsersRepository } from 'src/features/users/repositories';

@Injectable()
export class ChallengesService {
  constructor(
    private readonly challengesRepository: ChallengesRepository,
    private readonly usersRepository: UsersRepository,
    private readonly likedChallengesRepository: LikedChallengesRepository,
  ) {}

  async getLikedChallengesByUserId(userId: number): Promise<LikedChallenge[]> {
    const user = await this.usersRepository.findById(userId, {
      join: {
        alias: 'users',
        leftJoinAndSelect: {
          likedChallenges: 'users.likedChallenges',
        },
      },
    });

    if (!user) {
      throw new BadRequestException();
    }

    return user.likedChallenges;
  }

  getChallenges(): Promise<Challenge[]> {
    return this.challengesRepository.findAll();
  }

  async markLikeChallenge(
    userId: number,
    challengeId: number,
  ): Promise<boolean> {
    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new BadRequestException();
    }

    const challenge = await this.challengesRepository.findById(challengeId);
    if (!challenge) {
      throw new BadRequestException();
    }

    const likedChallenge = await this.likedChallengesRepository.findOne({
      where: {
        userId,
        challengeId,
      },
    });

    if (!likedChallenge) {
      const newLikedChallenge = new LikedChallenge();
      newLikedChallenge.challengeId = challengeId;
      newLikedChallenge.userId = userId;

      await this.likedChallengesRepository.save(newLikedChallenge);
      return true;
    }

    await this.likedChallengesRepository.remove(likedChallenge);
    return false;
  }
}
