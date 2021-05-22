import {
  EntityRepository,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { Challenge } from 'src/features/challenges/entities';

@EntityRepository(Challenge)
export class ChallengesRepository extends Repository<Challenge> {
  findById(
    id: number,
    options: FindOneOptions<Challenge> = {},
  ): Promise<Challenge | undefined> {
    return this.findOne(id, options);
  }

  findByTitle(
    title: string,
    options: Omit<FindOneOptions<Challenge>, 'where'> = {},
  ): Promise<Challenge | undefined> {
    return this.findOne({
      ...options,
      where: { subjectIdentifier: { title } },
    });
  }

  findAll(options: FindManyOptions<Challenge> = {}): Promise<Challenge[]> {
    return this.find(options);
  }
}
