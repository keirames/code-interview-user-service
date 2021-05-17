import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExternalAuthenticationProvider } from 'src/features/external-authentication-providers/entities';
import { AuthProvider } from 'src/common/enums';

@Injectable()
export class ExternalAuthenticationProvidersService {
  constructor(
    @InjectRepository(ExternalAuthenticationProvider)
    private readonly externalAuthenticationProviderRepository: Repository<ExternalAuthenticationProvider>,
  ) {}

  findById(id: number): Promise<ExternalAuthenticationProvider | undefined> {
    return this.externalAuthenticationProviderRepository.findOne({
      where: { id },
    });
  }

  findByName(
    name: AuthProvider,
  ): Promise<ExternalAuthenticationProvider | undefined> {
    return this.externalAuthenticationProviderRepository.findOne({
      where: { name },
    });
  }
}
