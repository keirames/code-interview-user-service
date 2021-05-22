import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserExternalLoginsRepository } from 'src/features/user-external-logins/repositories';
import { UserExternalLoginsService } from './user-external-logins.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserExternalLoginsRepository])],
  providers: [UserExternalLoginsService],
  exports: [UserExternalLoginsService, TypeOrmModule],
})
export class UserExternalLoginsModule {}
