import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthProvider } from 'src/common/enums';
import { AuthService } from 'src/features/auth/auth.service';
import { UserAccountsService } from 'src/features/user-accounts/user-accounts.service';

@Controller()
export class AuthController {
  constructor(
    private readonly userAccountsService: UserAccountsService,
    private readonly authService: AuthService,
  ) {}

  // @MessagePattern({ cmd: 'validateUser' })
  // async validateUser(email: string): Promise<boolean> {
  //   const isEmailValid = await this.userAccountsService.isEmailAlreadyTaken(
  //     email,
  //   );
  //   return isEmailValid;
  // }

  // @MessagePattern({ cmd: 'signInWithExternalProvider' })
  // async signInWithExternalProvider() {
  //   await this.authService.signInWithExternalProvider(AuthProvider.Google);
  //   return { name: 'hehe', id: 1 };
  // }
}
