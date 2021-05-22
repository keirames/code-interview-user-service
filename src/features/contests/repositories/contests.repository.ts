import {
  EntityRepository,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { Contest } from 'src/features/contests/entities';

@EntityRepository(Contest)
export class ContestsRepository extends Repository<Contest> {
  findById(
    id: number,
    options: FindOneOptions<Contest> = {},
  ): Promise<Contest | undefined> {
    return this.findOne(id, options);
  }

  findByTitle(
    title: string,
    options: Omit<FindOneOptions<Contest>, 'where'> = {},
  ): Promise<Contest | undefined> {
    return this.findOne({
      ...options,
      where: { subjectIdentifier: { title } },
    });
  }

  findAll(options: FindManyOptions<Contest> = {}): Promise<Contest[]> {
    return this.find(options);
  }
}
