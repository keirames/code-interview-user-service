import { Injectable } from '@nestjs/common';
import { UserAccount } from 'src/features/user-accounts/entities';
import { UserAccountsRepository } from 'src/features/user-accounts/repositories';

@Injectable()
export class UserAccountsService {
  constructor(
    private readonly userAccountsRepository: UserAccountsRepository,
  ) {}

  async findUserAccountByEmail(
    email: string,
  ): Promise<UserAccount | undefined> {
    const userAccount = await this.userAccountsRepository.findOne(email);
    return userAccount;
  }

  async isEmailAlreadyTaken(email: string): Promise<boolean> {
    const user = await this.userAccountsRepository.findOne({
      where: {
        email,
      },
    });

    return !!user;
  }
}
