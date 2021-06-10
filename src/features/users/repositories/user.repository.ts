import { EntityRepository, FindOneOptions, Repository } from 'typeorm';
import { User } from 'src/features/users/entities';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  findById(
    id: number,
    options: FindOneOptions<User> = {},
  ): Promise<User | undefined> {
    return this.findOne(id, options);
  }
}
