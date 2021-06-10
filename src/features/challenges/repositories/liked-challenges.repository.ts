import { EntityRepository, Repository } from 'typeorm';
import { LikedChallenge } from 'src/features/challenges/entities';

@EntityRepository(LikedChallenge)
export class LikedChallengesRepository extends Repository<LikedChallenge> {}
