import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthProvider } from 'src/common/enums';
import { ExternalAuthenticationProvidersService } from 'src/features/external-authentication-providers/external-authentication-providers.service';
import { UserExternalLogin } from 'src/features/user-external-logins/entities';
import { User } from 'src/features/users/entities';
import { UserAccountsRepository } from 'src/features/user-accounts/repositories';
import { UsersRepository } from 'src/features/users/repositories';
import { UserExternalLoginsRepository } from 'src/features/user-external-logins/repositories';

@Injectable()
export class AuthService {
  constructor(
    private readonly userExternalLoginsRepository: UserExternalLoginsRepository,
    private readonly externalAuthenticationProviderService: ExternalAuthenticationProvidersService,
    private readonly userAccountRepository: UserAccountsRepository,
    private readonly usersRepository: UsersRepository,
  ) {}

  async signInWithExternalProvider(providerName: AuthProvider): Promise<void> {
    const provider = await this.externalAuthenticationProviderService.findByName(
      providerName,
    );
    if (!provider) {
      throw new BadRequestException();
    }

    let user = new User();
    user = await this.usersRepository.save(user);

    // todo: add more info like name.
    const userExternalLogin = new UserExternalLogin();
    userExternalLogin.externalAuthenticationProvider = provider;
    userExternalLogin.user = user;

    await this.userExternalLoginsRepository.save(userExternalLogin);
  }
}
