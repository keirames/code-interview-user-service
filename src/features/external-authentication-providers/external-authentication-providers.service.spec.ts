import { Test, TestingModule } from '@nestjs/testing';
import { ExternalAuthenticationProvidersService } from './external-authentication-providers.service';

describe('ExternalAuthenticationProvidersService', () => {
  let service: ExternalAuthenticationProvidersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalAuthenticationProvidersService],
    }).compile();

    service = module.get<ExternalAuthenticationProvidersService>(
      ExternalAuthenticationProvidersService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
