import { EntityRepository, Repository } from 'typeorm';
import { UserExternalLogin } from 'src/features/user-external-logins/entities';

@EntityRepository(UserExternalLogin)
export class UserExternalLoginsRepository extends Repository<UserExternalLogin> {}
