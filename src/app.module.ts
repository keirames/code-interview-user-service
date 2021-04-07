import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UserExternalLoginsController } from './features/user-external-logins/user-external-logins.controller';
import { AuthModule } from './features/auth/auth.module';
import { UserAccountsModule } from './features/user-accounts/user-accounts.module';
import { UserExternalLoginsModule } from './features/user-external-logins/user-external-logins.module';
import { ExternalAuthenticationProvidersService } from './features/external-authentication-providers/external-authentication-providers.service';
import { ExternalAuthenticationProvidersController } from './features/external-authentication-providers/external-authentication-providers.controller';
import { ExternalAuthenticationProvidersModule } from './features/external-authentication-providers/external-authentication-providers.module';

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
  ],
  controllers: [
    AppController,
    UserExternalLoginsController,
    ExternalAuthenticationProvidersController,
  ],
  providers: [AppService, ExternalAuthenticationProvidersService],
})
export class AppModule {}
