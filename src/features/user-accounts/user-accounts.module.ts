import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAccount } from 'src/features/user-accounts/entities';
import { UserAccountsService } from 'src/features/user-accounts/user-accounts.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserAccount])],
  providers: [UserAccountsService],
  exports: [UserAccountsService],
})
export class UserAccountsModule {}
