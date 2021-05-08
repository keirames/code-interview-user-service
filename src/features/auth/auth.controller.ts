import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserAccountsService } from 'src/features/user-accounts/user-accounts.service';

@Controller()
export class AuthController {
  constructor(private readonly userAccountsService: UserAccountsService) {}

  @MessagePattern({ cmd: 'validateUser' })
  async validateUser(email: string): Promise<boolean> {
    const isValid = this.userAccountsService.isEmailAlreadyTaken(email);
    return isValid;
  }
}
