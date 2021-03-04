import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserAccountsService } from '../user-accounts/user-accounts.service';

@Controller()
export class AuthController {
  constructor(private readonly userAccountsService: UserAccountsService) {}

  @MessagePattern({ cmd: 'validateUser' })
  async validateUser(email: string): Promise<boolean> {
    console.log(email);
    const isValid = this.userAccountsService.isEmailAlreadyTaken(email);
    return isValid;
  }
}
