import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AuthController {
  @MessagePattern({ cmd: 'validateUser' })
  async validateUser(): Promise<string> {
    return 'not available';
  }
}
