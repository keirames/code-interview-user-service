import { Module } from '@nestjs/common';
import { AuthController } from 'src/features/auth/auth.controller';
import { AuthService } from 'src/features/auth/auth.service';
import { UserAccountsModule } from 'src/features/user-accounts/user-accounts.module';

@Module({
  imports: [UserAccountsModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
