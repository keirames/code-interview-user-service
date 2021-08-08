import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TestInput } from 'src/features/test-inputs/entities';

@Injectable()
export class TestInputsService {
  constructor(
    @InjectRepository(TestInput)
    private readonly testCasesRepository: Repository<TestInput>,
  ) {}

  findByChallengeId(challengeId: number): Promise<TestInput[]> {
    return this.testCasesRepository.find({ where: { challengeId } });
  }
}
