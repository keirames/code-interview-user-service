import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import UserAccountsService from '../user-accounts/user-accounts.service';

@Controller()
export default class AuthController {
  constructor(private readonly userAccountsService: UserAccountsService) {}

  @MessagePattern({ cmd: 'validateUser' })
  async validateUser(email: string): Promise<boolean> {
    const isValid = this.userAccountsService.isEmailAlreadyTaken(email);
    return isValid;
  }
}
