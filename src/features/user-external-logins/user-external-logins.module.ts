import { Module } from '@nestjs/common';
import { UserExternalLoginsService } from './user-external-logins.service';

@Module({
  providers: [UserExternalLoginsService],
})
export class UserExternalLoginsModule {}
