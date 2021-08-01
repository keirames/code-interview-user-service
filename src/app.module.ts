import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { AuthModule } from 'src/features/auth/auth.module';
import { ExternalAuthenticationProvidersModule } from 'src/features/external-authentication-providers/external-authentication-providers.module';
import { UserAccountsModule } from 'src/features/user-accounts/user-accounts.module';
import { UserExternalLoginsModule } from 'src/features/user-external-logins/user-external-logins.module';
import { UsersModule } from 'src/features/users/users.module';
import { TestCasesModule } from 'src/features/test-cases/test-cases.module';
import { SubscriptionsModule } from 'src/features/subscriptions/subscriptions.module';
import { ChallengesModule } from 'src/features/challenges/challenges.module';
import { ContestsModule } from 'src/features/contests/contests.module';
import { SubmissionsModule } from 'src/features/submissions/submissions.module';
import { JavascriptProducerModule } from 'src/microservices/producer/javascript-producer.module';
import { EventsModule } from 'src/executor-events/events.module';
import { RedisModule } from 'src/microservices/redis-client.module';
import TypeormConfig from '../ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(TypeormConfig),
    AuthModule,
    UserAccountsModule,
    UserExternalLoginsModule,
    ExternalAuthenticationProvidersModule,
    UsersModule,
    SubscriptionsModule,
    ChallengesModule,
    ContestsModule,
    SubmissionsModule,
    TestCasesModule,
    JavascriptProducerModule,
    EventsModule,
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
