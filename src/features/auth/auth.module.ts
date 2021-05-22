import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from 'src/features/auth/auth.controller';
import { AuthService } from 'src/features/auth/auth.service';
import { ExternalAuthenticationProvidersModule } from 'src/features/external-authentication-providers/external-authentication-providers.module';
import { UserAccountsModule } from 'src/features/user-accounts/user-accounts.module';
import { UserExternalLoginsModule } from 'src/features/user-external-logins/user-external-logins.module';
import { UsersModule } from 'src/features/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([]),
    UserAccountsModule,
    ExternalAuthenticationProvidersModule,
    UserExternalLoginsModule,
    UsersModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
