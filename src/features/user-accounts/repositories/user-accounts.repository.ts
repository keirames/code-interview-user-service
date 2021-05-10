import { UserAccount } from 'src/features/user-accounts/entities';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(UserAccount)
export class UserAccountsRepository extends Repository<UserAccount> {}
