import { Module } from '@nestjs/common';
import { UsersController } from 'src/features/users/users.controller';
import { UsersService } from 'src/features/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
