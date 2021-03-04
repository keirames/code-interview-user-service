import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAccount } from './user-account.entity';

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
