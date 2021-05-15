import { EntityRepository, Repository } from 'typeorm';
import { UserAccount } from 'src/features/user-accounts/entities';

@EntityRepository(UserAccount)
export class UserAccountsRepository extends Repository<UserAccount> {}
