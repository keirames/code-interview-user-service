import { Module } from '@nestjs/common';
import UserAccountsModule from 'src/features/user-accounts/user-accounts.module';
import AuthService from './auth.service';
import AuthController from './auth.controller';

@Module({
  imports: [UserAccountsModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export default class AuthModule {}
