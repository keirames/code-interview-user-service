import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthProvider } from 'src/common/enums';
import { UserExternalLogin } from 'src/features/user-external-logins/entities';
import { UserAccountsRepository } from 'src/features/user-accounts/repositories';
import { UsersRepository } from 'src/features/users/repositories';
import { UserExternalLoginsRepository } from 'src/features/user-external-logins/repositories';
import { ExternalAuthenticationProvidersRepository } from 'src/features/external-authentication-providers/repositories';

@Injectable()
export class AuthService {
  constructor(
    private readonly userExternalLoginsRepository: UserExternalLoginsRepository,
    private readonly externalAuthenticationProvidersRepository: ExternalAuthenticationProvidersRepository,
    private readonly userAccountsRepository: UserAccountsRepository,
    private readonly usersRepository: UsersRepository,
  ) {}

  async signInWithExternalProvider(providerName: AuthProvider): Promise<void> {
    const provider = await this.externalAuthenticationProvidersRepository.findByName(
      providerName,
    );
    if (!provider) {
      throw new BadRequestException();
    }

    let user = this.usersRepository.create();
    user = await this.usersRepository.save(user);

    // todo: add more info like name.
    const userExternalLogin = new UserExternalLogin();
    userExternalLogin.externalAuthenticationProvider = provider;
    userExternalLogin.user = user;

    await this.userExternalLoginsRepository.save(userExternalLogin);
  }
}
