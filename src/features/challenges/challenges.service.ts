import { Injectable } from '@nestjs/common';
import { Challenge } from 'src/features/challenges/entities';
import { ChallengesRepository } from 'src/features/challenges/repositories';

@Injectable()
export class ChallengesService {
  constructor(private readonly challengesRepository: ChallengesRepository) {}

  findByTitle(title: string): Promise<Challenge | undefined> {
    return this.challengesRepository.findByTitle(title);
  }

  findById(id: number): Promise<Challenge | undefined> {
    return this.challengesRepository.findById(id);
  }

  findAllChallenges(): Promise<Challenge[]> {
    return this.challengesRepository.findAll();
  }
}
