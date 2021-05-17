import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExternalAuthenticationProvider } from 'src/features/external-authentication-providers/entities';
import { ExternalAuthenticationProvidersService } from 'src/features/external-authentication-providers/external-authentication-providers.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExternalAuthenticationProvider])],
  providers: [ExternalAuthenticationProvidersService],
  exports: [ExternalAuthenticationProvidersService],
})
export class ExternalAuthenticationProvidersModule {}
