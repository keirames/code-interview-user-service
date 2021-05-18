import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExternalAuthenticationProvidersService } from 'src/features/external-authentication-providers/external-authentication-providers.service';
import { ExternalAuthenticationProvidersRepository } from 'src/features/external-authentication-providers/repositories';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExternalAuthenticationProvidersRepository]),
  ],
  providers: [ExternalAuthenticationProvidersService],
  exports: [ExternalAuthenticationProvidersService, TypeOrmModule],
})
export class ExternalAuthenticationProvidersModule {}
