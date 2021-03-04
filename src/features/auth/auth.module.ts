import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserAccountsModule } from '../user-accounts/user-accounts.module';

@Module({
  imports: [UserAccountsModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
