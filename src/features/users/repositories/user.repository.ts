import { EntityRepository, Repository } from 'typeorm';
import { User } from 'src/features/users/entities';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {}
