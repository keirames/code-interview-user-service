import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAccountsRepository } from 'src/features/user-accounts/repositories';
import { UserAccountsService } from 'src/features/user-accounts/user-accounts.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserAccountsRepository])],
  providers: [UserAccountsService],
  exports: [UserAccountsService],
})
export class UserAccountsModule {}
