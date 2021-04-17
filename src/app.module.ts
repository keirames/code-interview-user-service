import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { AuthModule } from 'src/features/auth/auth.module';
import { ExternalAuthenticationProvidersController } from 'src/features/external-authentication-providers/external-authentication-providers.controller';
import { ExternalAuthenticationProvidersModule } from 'src/features/external-authentication-providers/external-authentication-providers.module';
import { ExternalAuthenticationProvidersService } from 'src/features/external-authentication-providers/external-authentication-providers.service';
import { UserAccountsModule } from 'src/features/user-accounts/user-accounts.module';
import { UserExternalLoginsController } from 'src/features/user-external-logins/user-external-logins.controller';
import { UserExternalLoginsModule } from 'src/features/user-external-logins/user-external-logins.module';
import { UsersModule } from 'src/features/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrationsTableName: 'migration',
      migrations: ['dist/migration/*.js'],
      cli: {
        migrationsDir: 'src/migration',
      },
      logging: 'all',
    }),
    AuthModule,
    UserAccountsModule,
    UserExternalLoginsModule,
    ExternalAuthenticationProvidersModule,
    UsersModule,
  ],
  controllers: [
    AppController,
    UserExternalLoginsController,
    ExternalAuthenticationProvidersController,
  ],
  providers: [AppService, ExternalAuthenticationProvidersService],
})
export class AppModule {}
