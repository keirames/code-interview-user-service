import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TestCase } from 'src/features/test-cases/entities';

@Injectable()
export class TestCasesService {
  constructor(
    @InjectRepository(TestCase)
    private readonly testCasesRepository: Repository<TestCase>,
  ) {}

  findByChallengeId(challengeId: number): Promise<TestCase[]> {
    return this.testCasesRepository.find({
      where: {
        challengeId,
      },
    });
  }
}
