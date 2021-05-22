import { Injectable } from '@nestjs/common';
import { Contest } from 'src/features/contests/entities';
import { ContestsRepository } from 'src/features/contests/repositories';

@Injectable()
export class ContestsService {
  constructor(private readonly contestsRepository: ContestsRepository) {}

  findByTitle(title: string): Promise<Contest | undefined> {
    return this.contestsRepository.findByTitle(title);
  }

  findById(id: number): Promise<Contest | undefined> {
    return this.contestsRepository.findById(id);
  }

  findAllContests(): Promise<Contest[]> {
    return this.contestsRepository.findAll();
  }
}
