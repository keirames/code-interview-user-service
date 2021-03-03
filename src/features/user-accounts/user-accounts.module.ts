import { Module } from '@nestjs/common';
import { UserAccountsService } from './user-accounts.service';

@Module({
  providers: [UserAccountsService],
})
export class UserAccountsModule {}
