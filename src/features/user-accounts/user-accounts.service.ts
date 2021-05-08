import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccount } from 'src/features/user-accounts/entities';
import { Repository } from 'typeorm';

@Injectable()
export class UserAccountsService {
  constructor(
    @InjectRepository(UserAccount)
    private readonly userAccountsRepository: Repository<UserAccount>,
  ) {}

  async findUserAccountByEmail(
    email: string,
  ): Promise<UserAccount | undefined> {
    const userAccount = await this.userAccountsRepository.findOne(email);
    return userAccount;
  }

  async isEmailAlreadyTaken(email: string): Promise<boolean> {
    return !!this.userAccountsRepository.findOne(email);
  }
}
